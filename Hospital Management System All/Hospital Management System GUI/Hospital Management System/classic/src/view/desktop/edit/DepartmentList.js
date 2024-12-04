Ext.define('HMS.view.desktop.edit.DepartmentList', {
    extend: 'Ext.grid.Panel',
    xtype: 'departmentList',
    id:'deplist',
    layout: 'fit',

    store: {
        type: 'departmentstore'
    },


    columns: [
        { text: 'Department Id', dataIndex: 'department_id', flex: 1 },
        { text: 'Department Name', dataIndex: 'tx_department_name', flex: 1 },

    ],
    tbar: [{
        text: 'Add Department',
        iconCls: 'fa fa-plus',
        handler: function () {
            var window = Ext.create('Ext.window.Window', {
                title: 'Add Department',
                height: 200,
                width: 350,

                items: [{
                    xtype: 'add-department'

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
            var detailView = Ext.create('HMS.view.desktop.edit.DepartmentEdit', {});

            var window = Ext.create('Ext.window.Window', {
                title: 'Department Details',
                id: '_window',
                items: [detailView]
            });
            window.show();

            Ext.getCmp('id_department').setValue(record.get('department_id'));
            Ext.getCmp('name_department').setValue(record.get('tx_department_name'));
        }
    }

})