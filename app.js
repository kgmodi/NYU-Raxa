//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'NYU-Raxa': 'app'
});
//</debug>
var HOST = 'http://raxa.io:8080/openmrs';
localStorage.setItem("basicAuthHeader", "Basic YWRtaW46SGVsbG8xMjM=");  
// Hard coded for now, so you won't have to login via our app
Ext.application({
    name: 'NYU-Raxa',
	controllers: ['Main'],
	views: ['NYU-Raxa.view.SearchPatients','NYU-Raxa.view.PatientList'],
	model: ['NYU-Raxa.model.Patient'],
	store: ['NYU-Raxa.store.Patients'],
    requires: [
        'Ext.MessageBox'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
		Ext.create('NYU-Raxa.view.Viewport');
		
		var Util = {
		    getBasicAuthHeaders: function () {
		        var headers = {
		            "Authorization": localStorage.getItem("basicAuthHeader"),
		            "Accept": "application/json",
		            "Content-Type": "application/json"
		        };
		        return headers;
		    },
		    ISODateString: function(d) {
		        function pad(n) {
		            return n < 10 ? '0' + n : n;
		        }
		        return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + 'Z';
		    }
		}
		
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

var HOST = 'http://raxa.io:8080/openmrs';
localStorage.setItem("basicAuthHeader", "Basic YWRtaW46SGVsbG8xMjM=");  
// Hard coded for now, so you won't have to login via our app
var Util = {
    getBasicAuthHeaders: function () {
        var headers = {
            "Authorization": localStorage.getItem("basicAuthHeader"),
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        return headers;
    },
    ISODateString: function(d) {
        function pad(n) {
            return n < 10 ? '0' + n : n;
        }
        return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + 'Z';
    }
}