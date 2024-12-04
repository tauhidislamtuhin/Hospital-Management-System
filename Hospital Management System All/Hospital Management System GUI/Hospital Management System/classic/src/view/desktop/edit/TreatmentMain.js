Ext.define('HMS.view.desktop.edit.TreatmentMain', {
    extend: 'Ext.grid.Panel',
    xtype: 'treatmentmain',
    layout: 'fit',

    store: {
        type: 'treatmentmain'
    },


    columns: [
        { text: 'Treatment Id', dataIndex: 'treatment_id', flex: 1 },
        { text: 'Doctor Id', dataIndex: 'doctor_id', flex: 1 },
        { text: 'Patient Serial No', dataIndex: 'patient_serial_no', flex: 1 },
        { text: 'Medicine Names', dataIndex: 'tx_medicine_names', flex: 1 },
        { text: 'Test Name', dataIndex: 'tx_test_names', flex: 1 },
        { text: 'Treatment Fee', dataIndex: 'treatment_fee', flex: 1 }

    ],
    tbar: [{
        text: 'Add Treatment',
        iconCls: 'fa fa-plus',
        handler: function () {
            var window = Ext.create('Ext.window.Window', {
                title: 'Add Treatment',


                items: [{
                    xtype: 'addtreatment'

                }]
            });
            window.show();
        }
    }
    ],


    //'treatment_id','doctor_id','patient_serial_no', 'tx_medicine_names', 'tx_test_names', 'treatment_fee'



    // treatment_id,patient_serial_no,tx_patient_name,patient_age, tx_doctor_name, 
    // tx_medicine_names, tx_test_names, treatment_fee

    listeners: {
        itemclick: function (grid, record, item, index, e, eOpts) {
            var detailView = Ext.create('HMS.view.desktop.edit.EditTreatment', {});

            var window = Ext.create('Ext.window.Window', {
                title: 'Treatment Details',
                id: 't_window',
                items: [detailView]
            });
            window.show();

            Ext.getCmp('treatment_id').setValue(record.get('treatment_id'));
            Ext.getCmp('doctor_id').setValue(record.get('doctor_id'));
            Ext.getCmp('patient_serial_no').setValue(record.get('patient_serial_no'));
            Ext.getCmp('tx_medicine_names').setValue(record.get('tx_medicine_names'));
            Ext.getCmp('tx_test_names').setValue(record.get('tx_test_names'));
            Ext.getCmp('treatment_fee').setValue(record.get('treatment_fee'));
        }
    }

})