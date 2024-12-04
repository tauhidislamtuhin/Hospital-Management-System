Ext.define('HMS.model.AddmissionP', {
    extend: 'HMS.model.Base',

    fields: [
        'admission_id' ,'patient_serial_no', 'admission_date', 'department_id', 'doctor_id', 'patient_documents'
    ]

    // fields: [
    //     'admission_id' ,'id_serial_no', 'tx_patient_name', 'patient_age', 'tx_patient_gender', 'tx_department_name', 'tx_doctor_name','dt_visit_date','doctor_fee_bdt'
    // ]
    // "admission_id": 400001,
    // "patient_serial_no": 100001,
    // "admission_date": "2023-05-10",
    // "department_id": 200002,
    // "doctor_id": 300001,
    // "patient_documents": "null"
});
