Ext.define('NYU-Raxa.view.PatientDetail', {
    extend: 'Ext.Panel',
    xtype: 'patientdetail',
    requires: [
		'Ext.device.Camera',
    ],
    config: {
        title: 'Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
		tpl: ['{display}'],
		items: [
			{
				xtype: 'button',
				id: 'capturePhotoBtn',
				action: 'ui',
				text: 'Take Photo'
				
			},
			{
				xtype: 'image',
				height: 300,
				id: 'theimage',
				width: 300,
			}
		]
    }
});