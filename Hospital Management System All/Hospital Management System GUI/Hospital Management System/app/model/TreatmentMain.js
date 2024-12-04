Ext.define('HMS.model.TreatmentMain', {
    extend: 'HMS.model.Base',

    fields: [
        'treatment_id','doctor_id','patient_serial_no', 'tx_medicine_names', 'tx_test_names', 'treatment_fee'
    ]
});