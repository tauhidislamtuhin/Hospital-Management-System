Ext.define('HMS.store.DoctorStore', {
    extend: 'Ext.data.Store',

    alias: 'store.doctor',
    requires: [
        'HMS.model.DoctorModel',
    ],

    model: 'HMS.model.DoctorModel',

    pagesize: 10,



    autoLoad: true,
    // proxy: {
    //     type: 'ajax',
    //     url: 'resources/doctor.json',
    //     // method: 'GET',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'item'
    //     }
    // },
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/read-doct-all',
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
});
