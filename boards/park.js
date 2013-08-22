// Full list of statuses:
// 'New', 'In Progress', 'Definition in Process', 'Resolved', 'Rejected', 'Final', 'Final - Estimated', 'Final - Signed',
// 'In Development', 'Uploaded', 'Delivered', 'Reopened', 'Need More Info', 'Pending Acceptance', 'Accepted', 'Not Reproduced',
// 'On Hold', 'Closed', 'Cancelled'
// 'New', 'In Progress', 'Resolved', 'Rejected', 'In Development', 'Reopened', 'Need More Info', 'On Hold', 'Closed'


var title = 'PK Server Dashboard';

var settings = {};

// -----------------------------------------
// USER SETTINGS
// -----------------------------------------
	settings = {
	    boardTitle: 'PK Server!',
	    userKey: '',
	    projects: [
				{ 
					id: 'pkserver', 				
					title: 'Parking Server',
					issueTrackers: [1, 2, 4, 5, 6, 10], 
					customStatuses: [
						{title: 'Not Started', 	includes: [1]},
						{title: 'In Progress', 	includes: [2, 19]},
						{title: 'Blocked', 	includes: [4, 14]},
						{title: 'Testing', 	includes: [3, 6, 18]},
						{title: 'Done', 	includes: [5]}
					]
				}
		]
  },


// -------------------------------------------------------------------
// Methods -----------------------------------------------------------
// -------------------------------------------------------------------
	// settings.userSettings.getProjectSettingsById = function (projectId) {
	// 	console.log('UserSettings: Project by ID requested. Id: ' + projectId);

	// 	for(var i=0; i<self.userSettings.projects.length; i++) {
	// 		if ( self.userSettings.projects[i].id == projectId ) {
	// 			console.log('  Returned: ' + self.userSettings.projects[i].title);
	// 			return self.userSettings.projects[i];
	// 		}
	// 	}
	// 	console.log('  Returned: ' + undefined);
	// 	return undefined;
	// }



exports.data = function(callback) {
	callback(settings);
}

