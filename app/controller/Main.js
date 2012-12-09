Ext.define('NYU-Raxa.controller.Main',{
	extend: 'Ext.app.Controller',
	
	views: ['NYU-Raxa.view.SearchPatients','NYU-Raxa.view.PatientList','NYU-Raxa.view.PatientDetail'],
	models: ['NYU-Raxa.model.Patient'],
	stores: ['NYU-Raxa.store.Patients'],
	config: {
		refs: {
			searchPatients: "#search-patients-btn",
			patientName: "#patient-name",
			patientList: "#patientList",
			main: "mainpanel",
			patientListPanel: "patientList",
			capturePhoto: "#capturePhotoBtn",
			patientDetailPanel: "patientdetail"
		},
		control: {
			searchPatients: {
				tap: "onSearchPatients"				
			},
			patientList: {
				disclose: 'showDetail',
				itemtap: 'tapItem'
			},
			capturePhoto: {
				tap: "onCapturePhoto"
			},
			main: {
				back: "onBack"
			}
		}
	},
	launch: function() {

    },
	init: function() {
	},
	tapItem: function(list, index, target, record){
		this.getMain().push({
            xtype: 'patientdetail',
            data: record.getData(),
        })
	},
	onBack: function(view, eopts){
		console.log(eopts);
	},
	showDetail: function(list,record){
		this.getMain().push({
            xtype: 'patientdetail',
            data: record.getData(),
        })
	},
	onCapturePhoto: function(){
		var uuid = this.getPatientDetailPanel().getData().uuid
		Ext.device.Camera.capture({
			success: function(image) {
				var img = Ext.getCmp('theimage');
				img.setSrc('data:image/jpeg;base64,' +image);
				var json = {"patient":uuid,"dataURI":"data:image/jpeg;base64,"+image}
				Ext.Ajax.request({
					url: 'http://raxa.io:8080/openmrs/ws/rest/v1/raxacore/image',
	                method: 'POST',
	                disableCaching: false,
	                jsonData: json,
	                headers: Util.getBasicAuthHeaders(),
					success: function (response) {
						Ext.Msg.alert('Title', 'success');
					},
					failure: function() {
						 Ext.Msg.alert("Error", "Failed to make REST call to ");
					}
	            });
			},
			failure: function(){
				Ext.Msg.alert('Title', 'failure');
			},
			quality: 75,
			width: 200,
			height: 200,
			destination: 'data',
			source: 'camera',
			scope: this
		});
	},
	onSearchPatients: function() {
			var patientName = this.getPatientName()._value;
			var json = [{uuid : "1"}]			
			Ext.Ajax.request({
							async: false,
			                url: HOST + '/ws/rest/v1/patient?q='+patientName,
			                method: 'GET',
			                disableCaching: false,
			                headers: Util.getBasicAuthHeaders(),
			                failure: function (response) {
			                    Ext.Msg.alert("Error", 'patient search error');
			                },
			                success: function (response) {
			                    var jsonResponse = Ext.decode(response.responseText);
								json = jsonResponse.results;
			                }
			            });
			this.getMain().push({
				xtype: 'patientList',
				data: json
			});
	}
});