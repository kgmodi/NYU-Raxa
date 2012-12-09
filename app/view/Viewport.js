Ext.define('NYU-Raxa.view.Viewport', {
	extend: 'Ext.navigation.View',
	requires : ['NYU-Raxa.view.SearchPatients',
				'NYU-Raxa.view.PatientList'],
	xtype : 'mainpanel',
	config: {
			fullscreen : true,
			items: [
				{
					xtype: 'searchPatients'
				}
			]
	}
});