Ext.define('HMS.model.Treatment', {
    extend: 'HMS.model.Base',

    fields: [
        'treatment_id','patient_serial_no','tx_patient_name','patient_age', 'tx_doctor_name', 
        'tx_medicine_names', 'tx_test_names', 'treatment_fee'
    ]
});