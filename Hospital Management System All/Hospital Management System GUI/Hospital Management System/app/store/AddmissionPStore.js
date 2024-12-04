Ext.define('HMS.store.AddmissionPStore', {
    extend: 'Ext.data.Store',
    storeId: 'addmisstionP',

    alias: 'store.addmission',

    model: 'HMS.model.AddmissionP',

    pagesize: 10,


    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/read-admission-all',
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    // proxy: {
    //     type: 'ajax',
    //     url: 'resouces/addmissionP.json',
    //     // method: 'GET',
    //     reader: {
    //         type: 'json',
    //     }
    // },

});
