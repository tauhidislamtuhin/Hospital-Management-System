Ext.define('HMS.store.Department', {
    extend: 'Ext.data.Store',
    storeId: 'departmentstore',
    alias: 'store.departmentstore',

    model: 'HMS.model.Department',


   // fields: [ 'tx_doctor_name', 'tx_doctor_gender', 'tx_doctor_degree', 'tx_doctor_schedule', 'tx_doctor_phone_no', 'doctor_photo'],
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/read-dept-all',
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },


});