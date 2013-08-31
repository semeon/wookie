var db = require('./db/mongodb.js');
var dbUrl = db.url();

var record_visit = function(req, res){
    /* Connect to the DB and auth */
    require('mongodb').connect(dbUrl, function(err, conn){
        conn.collection('ips', function(err, coll){
            /* Simple object to insert: ip address and date */
            object_to_insert = { 'ip': req.connection.remoteAddress, 'ts': new Date() };
            /* Insert the object then print in response */
            /* Note the _id has been created */
            coll.insert( object_to_insert, {safe:true}, function(err){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(object_to_insert));
            res.end('\n');
            });
        });
    });
}


var print_visits = function(req, res){
    /* Connect to the DB and auth */
    require('mongodb').connect(dbUrl, function(err, conn){
        conn.collection('ips', function(err, coll){
            coll.find({}, {limit:10, sort:[['_id','desc']]}, function(err, cursor){
                cursor.toArray(function(err, items){
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    for(i=0; i<items.length;i++){
                        res.write(JSON.stringify(items[i]) + "\n");
                    }
                    res.end();
                });
            });
        });
    });
}





var port = (process.env.VMC_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');
var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!!!! db!!\n');
// }).listen(port, host);

http.createServer(function (req, res) {
    params = require('url').parse(req.url);
    if(params.pathname === '/history') {
        print_visits(req, res);
    }
    else{
        record_visit(req, res);
    }
}).listen(port, host);

