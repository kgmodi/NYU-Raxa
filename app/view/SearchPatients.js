Ext.define('NYU-Raxa.view.SearchPatients', {
	extend: 'Ext.form.Panel',
	xtype: 'searchPatients',
	
	config: {
		title: 'Search Patients',
		iconCls: 'search',
		items: [
			{
				xtype: 'textfield',
				name: 'Name',
				label: 'Name',
				ui: 'action',
				id: 'patient-name'
				
			},
			{
				xtype : 'button',
				text : 'Search',
				ui: 'action',
				id: 'search-patients-btn'
			}
		]
	}
})