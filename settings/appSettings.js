var settings = {};
// -----------------------------------------
// REDMINE SETTINGS
// -----------------------------------------
	settings.redmineSettings = {
	  // Домен редмайн
		redmineUrl:         'http://speradze/',
		redmineRealUrl:         'https://redmine.firstlinesoftware.com/',

		// parametered urls
		projectsRequestUrl: 'projects',
		issuesRequestUrl:   'issues',
		queriesRequestUrl:  'queries',

		// project-based urls
		projectDataUrl:     'projects/',
		versionsRequestUrl:  'versions',

		issueStatusesMap: {
			'1':  {id: 1,  name: "New"},
			'2':  {id: 2,  name: "In Progress"},
			'3':  {id: 3,  name: "Resolved"},
			'4':  {id: 4,  name: "Need More Info"},
			'5':  {id: 5,  name: "Closed"},
			'6':  {id: 6,  name: "Rejected"},
			'7':  {id: 7,  name: "Final"},
			'8':  {id: 8,  name: "In Development"},
			'9':  {id: 9,  name: "Delivered"},
			'10': {id: 10, name: "Accepted"},
			'11': {id: 11, name: "Final - Signed"},
			'12': {id: 12, name: "Uploaded"},
			'13': {id: 13, name: "Definition in Process"},
			'14': {id: 14, name: "On Hold"},
			'15': {id: 15, name: "Cancelled"},
			'16': {id: 16, name: "Final - Estimated"},
			'17': {id: 17, name: "Pending Acceptance"},
			'18': {id: 18, name: "Not Reproduced"},
			'19': {id: 19, name: "Reopened"}
		},

		issueTrackersMap: {
			'1':  {id: 1,  name: "Bug"},
			'2':  {id: 2,  name: "Feature"},
			'4':  {id: 4,  name: "Task"},
			'5':  {id: 5,  name: "Change req."},
			'6':  {id: 6,  name: "Requirement"},
			'7':  {id: 7,  name: "CR"},
			'9':  {id: 9,  name: "ADJ"},
			'10': {id: 10, name: "Question"}
		},

		responseLimit: 100, // Redmine never return more than 100

		jsonRequestModifier: '.json'
	}

// -----------------------------------------
// DASHBOARD SETTINGS
// -----------------------------------------
	settings.appSettings = {
		statistics: false,
		appStatus: 'testing',
		dbUri: 'http://speradze:5984/db/'
	},


exports.data = function(callback) {
	callback(settings);
}

