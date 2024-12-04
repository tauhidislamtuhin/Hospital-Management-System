Ext.define('HMS.view.desktop.window.TreatmentList', {
    extend: 'Ext.grid.Panel',
    xtype: 'treatmentList',
    layout: 'fit',

    store: {
        type: 'treatment'
    },


    columns: [
        { text: 'Treatment Id', dataIndex: 'treatment_id', flex: 1 },
        { text: 'Patient Serial No', dataIndex: 'patient_serial_no', flex: 1 },
        { text: 'Patient Name', dataIndex: 'tx_patient_name', flex: 1 },
        { text: 'Patient Age', dataIndex: 'patient_age', flex: 1 },
        { text: 'Doctor Name', dataIndex: 'tx_doctor_name', flex: 1 },
        { text: 'Medicine Names', dataIndex: 'tx_medicine_names', flex: 1 },
        { text: 'Test Name', dataIndex: 'tx_test_names', flex: 1 },
        { text: 'Treatment Names', dataIndex: 'treatment_fee', flex: 1 }
    ],

    // treatment_id,patient_serial_no,tx_patient_name,patient_age, tx_doctor_name, 
    // tx_medicine_names, tx_test_names, treatment_fee

})