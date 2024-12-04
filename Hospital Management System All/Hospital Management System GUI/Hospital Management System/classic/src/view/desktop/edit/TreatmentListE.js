Ext.define('HMS.view.desktop.edit.TreatmentListE', {
    extend: 'Ext.grid.Panel',
    xtype: 'treatmentListE',
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
        { text: 'Treatment Fee', dataIndex: 'treatment_fee', flex: 1 }
    ],

    // treatment_id,patient_serial_no,tx_patient_name,patient_age, tx_doctor_name, 
    // tx_medicine_names, tx_test_names, treatment_fee

    // listeners: {
    //     itemclick: function (grid, record, item, index, e, eOpts) {
    //         var detailView = Ext.create('HMS.view.desktop.edit.EditTreatment', {});

    //         var window = Ext.create('Ext.window.Window', {
    //             title: 'Treatment Details',
    //             id: '_window',
    //             items: [detailView]
    //         });
    //         window.show();

    //         Ext.getCmp('treatment_id').setValue(record.get('treatment_id'));
    //         Ext.getCmp('patient_serial_no').setValue(record.get('patient_serial_no'));
    //         Ext.getCmp('tx_patient_name').setValue(record.get('tx_patient_name'));
    //         Ext.getCmp('patient_age').setValue(record.get('patient_age'));
    //         Ext.getCmp('tx_doctor_name').setValue(record.get('tx_doctor_name'));
    //         Ext.getCmp('tx_medicine_names').setValue(record.get('tx_medicine_names'));
    //         Ext.getCmp('tx_test_names').setValue(record.get('tx_test_names'));
    //         Ext.getCmp('treatment_fee').setValue(record.get('treatment_fee'));
    //     }
    // }

})