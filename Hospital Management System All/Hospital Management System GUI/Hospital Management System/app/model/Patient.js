Ext.define('HMS.model.Patient', {
    extend: 'HMS.model.Base',

    fields: [
        'patient_serial_no', 'tx_patient_name', 'patient_age',
        'tx_patient_gender', 'department_id', 'doctor_id', 'tx_patient_problem', 'tx_patient_address', 'tx_patient_Phone', 'dt_visit_date'
    ]

});

