Ext.define('NYU-Raxa.view.PatientList', {
	extend: 'Ext.dataview.List',
	requires: ['NYU-Raxa.store.Patients'],
	xtype: 'patientList',
	id: 'patientList',
	config:{
    	itemTpl: '{display}',
		id: 'patientList',
		store: {
			type: 'patients'
		},
		grouped: false,
		onItemDisclosure: true
	}
});