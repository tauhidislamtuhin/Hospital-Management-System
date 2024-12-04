Ext.define('HMS.store.TreatmentMain', {
    extend: 'Ext.data.Store',
    storeId: 'treatmentMainstore',
    alias: 'store.treatmentmain',

    model: 'HMS.model.TreatmentMain',


   // fields: [ 'tx_doctor_name', 'tx_doctor_gender', 'tx_doctor_degree', 'tx_doctor_schedule', 'tx_doctor_phone_no', 'doctor_photo'],
   fields: [
    'treatment_id','doctor_id','patient_serial_no', 'tx_medicine_names', 'tx_test_names', 'treatment_fee'
],
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/read-treatment-all',
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },


});