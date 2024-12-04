Ext.define('HMS.store.Personnel', {
    extend: 'Ext.data.Store',
    storeId: 'StudentListStore',

    alias: 'store.personnel',

    model: 'HMS.model.Personnel',

    pagesize: 10,



    autoLoad: true,
    // proxy: {
    //     type: 'ajax',
    //     url: 'resources/paitent.json',
    //     // method: 'GET',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'data'
    //     }
    // },
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/patient-list',
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
});
