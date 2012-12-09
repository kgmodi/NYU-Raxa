Ext.define('NYU-Raxa.store.Patients',{
	extend : 'Ext.data.Store',
	alias: 'store.patients',
	config: {
		model: 'NYU-Raxa.model.Patient',
		proxy: {
            type: 'rest',
            url: HOST + '/ws/rest/v1/patient?q=john',
            headers: Util.getBasicAuthHeaders(),
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
	}
})