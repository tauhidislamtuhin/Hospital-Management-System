Ext.define('HMS.store.Treatment', {
    extend: 'Ext.data.Store',
    storeId: 'treatmentstore',
    alias: 'store.treatment',

    model: 'HMS.model.Treatment',


   // fields: [ 'tx_doctor_name', 'tx_doctor_gender', 'tx_doctor_degree', 'tx_doctor_schedule', 'tx_doctor_phone_no', 'doctor_photo'],
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/treatment-list',
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },


});