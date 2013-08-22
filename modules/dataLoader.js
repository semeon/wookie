
// var settings = require('./settings');

// var appData = $rootScope.data;
// var userSettings = $rootScope.settings.userSettings;
// var redmineSettings = $rootScope.settings.redmineSettings;

var dataLoader = {};

exports.loadAll = function(callback) {
  // dataLoader.startInitialDataLoad();
  dataLoader.callback = callback;
  dataLoader.response = {};
  dataLoader.response.body = 'RESPONSE';
  dataLoader.callback(dataLoader.response);
}

exports.loadProject = function(projectId, callback) {
  dataLoader.callback = callback;
  dataLoader.loadProjectData(projectId);
  dataLoader.response.body = 'RESPONSE';
  dataLoader.callback(dataLoader.response);
}



//-----------------------------------------------------------------------------------------------------
// PROJECT DATA LOAD
//-----------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------
  dataLoader.loadProjectData = function(projectId) {
    var userProject = userSettings.getProjectSettingsById(projectId);
    var dataProject = appData.projects[userProject.id];

    if(dataProject == undefined) {
      console.log(log_ctrl + ' - It doesn\'t, creating a new one.');
      dataProject = appData.createProject(userProject);

    } else {
      console.log(log_ctrl + ' - It does, proceeding with it.');
    }

    // dataLoader.loadVersions(dataProject);
  }//----------------------------------------------------------------------------------------------------


//   //-----------------------------------------------------------------------------------------------------
//   dataLoader.loadVersions = function(project, loadIssues) {
//     console.log('Starting getVersionList for ' + project.id);

//       var requestUrl =  redmineSettings.redmineUrl + 
//                         redmineSettings.projectDataUrl + 
//                         project.id + '/' +
//                         redmineSettings.versionsRequestUrl + 
//                         redmineSettings.jsonRequestModifier;

//     console.log('Requesting versions for ' + project.id);

//     requestVersions(project, requestUrl);  

//     // Request --------------------------------------------------------------
//       function requestVersions (project, requestUrl) {
//         var requestParameters = { status: 'open'};
//         genericRequest( requestUrl, 
//                 requestParameters, 
//                 function (data) {
//                   processVersions(data, project);
//                 });
//       }

//     // Response processing -------------------------------------------------
//         function processVersions(data, project) {
//         console.log('Starting procesing versions for ' + project.id);

//         if (data.versions) {

//           if (data.total_count > redmineSettings.responseLimit) {
//             // TODO - Use pagination here
//             alert('Warning! Redmine response limit is exceeded.' +
//                   '\nRequested items count: ' + data.total_count + '.' +
//                   '\nLimit: ' + redmineSettings.responseLimit + '.'
//                   );
//           }
//           // eventHandler.projectLoadCompleted(project);

//           for (var v=0; v<data.versions.length; v++) {
//             if (data.versions[v].status != 'closed') {
//               // Creating a new version
//               // ------------------------------
//               var version = appData.createVersion(project, data.versions[v]);
//               // eventHandler.versionCreated(project, version);



//               console.log('Calling load issues by version for ' + project.id + ' / ' + version.name);
//               dataLoader.loadVersionIssuesData(project, version);
//             }
//           }

//         } else if (data.error) { 
//           console.log(data.error);
//           // eventHandler.dataLoadErrorOccured(data.error);

//         } else {
//           console.log(data.error);
//           // eventHandler.genericErrorOccured('AJAX Data load');
//         }
//         }
//   }//----------------------------------------------------------------------------------------------------


// // --------------------------------------------------------------------------------------------------------
// // VERSION DATA LOAD
// // --------------------------------------------------------------------------------------------------------
//   dataLoader.loadVersionIssuesData = function(project, version) {
//     console.log('Starting batch load for ' + project.id + ' / ' + version.name);

//       version.loadInProgress = true;
//       var requestUrl =  redmineSettings.redmineUrl + 
//                         redmineSettings.projectDataUrl + 
//                         project.id + '/' +
//                         redmineSettings.issuesRequestUrl + 
//                         redmineSettings.jsonRequestModifier;

//       requestIssuesPage(project, version, requestUrl, 0);

//     // Request --------------------------------------------------------------
//     function requestIssuesPage (project, version, requestUrl, offset) {
//       var requestParameters = { offset: offset, 
//                     status_id: '*',
//                     fixed_version_id: version.id
//                    };

//       console.log('Requesting issues page ' + offset + ' for ' + project.id + ' / ' + version.name);
//       console.log(' - URL:  ' + requestUrl);

//       genericRequest( requestUrl, 
//               requestParameters, 
//               function (data) {
//                 processIssuesPage(data, requestParameters, project, version, requestUrl);
//               });
//     } // --------------------------------------------------------------------

//   // Response processing --------------------------------------------------
//   function processIssuesPage (data, rp, project, version, requestUrl) {
//     console.log(log_ctrl + 'Processing issues page ' + rp.offset + ' for ' + project.id + ' / ' + version.name);

//     if (data.issues) {

//       var prevPagesIssueCount = version.sourceIssues.length;
//       var currentPageIssueCount = data.issues.length;

//       if( (prevPagesIssueCount+currentPageIssueCount) > data.total_count) {
//         var diff = data.total_count - prevPagesIssueCount;
//         var notLoadedIssues = data.issues.slice(currentPageIssueCount-diff);
//         version.sourceIssues = version.sourceIssues.concat(notLoadedIssues);

//       } else {
//         version.sourceIssues = version.sourceIssues.concat(data.issues);
//       }

//       var loadedIssuesCount = version.sourceIssues.length;
//       console.log(log_ctrl + 'Data total count: ' + version.sourceIssues.length);

//       if (loadedIssuesCount < data.total_count) {
//         var nexPageNum = loadedIssuesCount;
//         console.log(' - Calling next page load, page ' + nexPageNum);
//         requestIssuesPage(project, version, requestUrl, nexPageNum);

//       } else {
//         version.loadInProgress = false;
//         $rootScope.data.calculateStatistics(project, version);
//       }

//     } else if (data.error) { 
//       console.log(data.error);

//     } else {
//       console.log(data.error);
//     }
//   } // --------------------------------------------------------------------
// }


// // --------------------------------------------------------------------------------------------------------
// // GENERIC REQUEST
// // --------------------------------------------------------------------------------------------------------
//   function genericRequest(requestUri, requestParams, callback) {
//     requestParams.key = redmineSettings.userKey;
//     requestParams.limit = redmineSettings.responseLimit;
//     requestParams.subproject_id= '!*';

//     $http.get(requestUri, {params: requestParams}).
//     success( function(data) {
//               callback(data, requestParams);
//             });
//   }  

