Ext.define("GS.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
		'Ext.device.Camera',
		'Ext.Button'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,


                html: [
                    "This is a prototype for RAXA patient image module created by NYU.",
					"To take a photograph, tap on the take photo icon below.",
					"Once on the 'Take Photo' tab, tap 'Take Photo'"
                ].join("")
            },
            {
                title: 'Take Photo',
                iconCls: 'action',
                items:[
					{
						xtype: 'button',
						text: 'Take Photo',
						handler: function(){
							Ext.device.Camera.capture({
							    success: function(image) {
							        imageView.setSrc(image);
							    },
							    quality: 75,
							    width: 200,
							    height: 200,
							    destination: 'camera'
							});
						}
					}
				]
            }
        ]
    }
});
