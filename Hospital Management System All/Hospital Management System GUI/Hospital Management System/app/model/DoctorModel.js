Ext.define('HMS.model.DoctorModel', {
    extend: 'HMS.model.Base',


    fields: [
        'doctor_id', 'department_id','tx_doctor_name','tx_doctor_gender', 'tx_doctor_degree', 
        'tx_doctor_schedule', 'tx_doctor_phone_no', 'doctor_photo','doctor_fee_bdt'
    ]

    
});
