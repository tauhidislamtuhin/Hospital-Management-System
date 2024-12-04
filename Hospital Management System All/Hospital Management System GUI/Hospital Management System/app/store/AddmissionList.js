Ext.define('HMS.store.AddmissionList', {
    extend: 'Ext.data.Store',
    storeId: 'addmisstionP',

    alias: 'store.addmissionlist',

    model: 'HMS.model.AddmissionList',

    pagesize: 10,


    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/admission-list',
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
});
