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
		  // ПРИМЕР НАСТРОЙКИ ПРОЕКТА
				// { 
				// 	ID проекта, такой как в редмайне
				// 	id: 'isori', 				
				
				// 	название проекта, каким будет отображаться на странице
				// 	title: 'FPK Loyalty',
				
				// 	ID трекеров, которые вас интересуют
				// 		Например: 1 - Bug, 2 - Feature
				// 		Все трекеры ниже в Redmine Settings
				// 	issueTrackers: [1, 2, 10], 

				// 	Группы статусов, по которым собирается статистика
				// 		"title" - их названия
				// 		"includes" - статусы редмайна, которые следует включать в группы
				// 			Например, 1 - New, 2 - In Progress
				// 			Все статусы ниже в Redmine Settings
				// 	customStatuses: [
				// 						{title: 'Development', 	includes: [1, 2, 19]},
				// 						{title: 'Testing', 		includes: [3, 6, 18]},
				// 						{title: 'Blocked', 		includes: [4, 14]},
				// 						{title: 'Done', 		includes: [5]}
				// 					]
				// },

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

