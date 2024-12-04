Ext.define('HMS.store.Patient', {
    extend: 'Ext.data.Store',
    storeId: 'patientstore',
    alias: 'store.patient',

    model: 'HMS.model.Patient',
    // fields: [
    //     'patient_serial_no' ,'tx_patient_name', 'patient_age',
    //      'tx_patient_gender', 'department_id',, 'doctor_id', 'tx_patient_problem','tx_patient_address','tx_patient_Phone','dt_visit_date'
    // ],

    // fields: [ 'tx_doctor_name', 'tx_doctor_gender', 'tx_doctor_degree', 'tx_doctor_schedule', 'tx_doctor_phone_no', 'doctor_photo'],
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
        url: 'http://localhost:8080/read-patient-all',
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },


});