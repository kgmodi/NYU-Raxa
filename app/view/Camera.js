Ext.device.Camera.capture({
    success: function(image) {
        imageView.setSrc(image);
    },
    quality: 75,
    width: 200,
    height: 200,
    destination: 'data'
});