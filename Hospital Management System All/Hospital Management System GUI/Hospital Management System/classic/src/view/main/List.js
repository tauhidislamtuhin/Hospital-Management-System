/**
 * This view is an example list of people.
 */
Ext.define('HMS.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    // frame: true,
    // height: 500,
    // width: 700,
    id: 'patientGridList',


    controller: 'paitentController',
    requires: [
        'HMS.model.Patient'
    ],


    store: {
        type: 'patient'
    },


    initComponent: function () {
        Ext.apply(this,
            {
                columns: [
                    { text: 'Id', dataIndex: 'patient_serial_no'},
                    { text: 'Name', dataIndex: 'tx_patient_name'},
                    { text: 'Age', dataIndex: 'patient_age', flex: 1 },
                    { text: 'Gender', dataIndex: 'tx_patient_gender', flex: 1 },
                    { text: 'Department Id', dataIndex: 'department_id', flex: 1 },
                    { text: 'Doctor Id', dataIndex: 'doctor_id', flex: 1 },
                    { text: 'Problem', dataIndex: 'tx_patient_problem', flex: 1 },
                    { text: 'Address', dataIndex: 'tx_patient_address', flex: 1 },
                    { text: 'Phone', dataIndex: 'tx_patient_Phone', flex: 1 },
                    { text: 'Visit Date', dataIndex: 'dt_visit_date', flex: 1 },




                    // {
                    //     xtype: 'widgetcolumn',
                    //     text: 'Action',
                    //     width: 100,
                    //     widget: {
                    //         xtype: 'button',
                    //         text: 'Edit',
                    //         iconCls: 'fas fa-edit',
                    //         handler: 'onEditPaitentClick'
                    //     },
                    // },

                ],
                bbar: {
                    xtype: 'pagingtoolbar',
                    displayInfo: true,
                    displayMsg: 'Displaying topics {0} - {1} of {2}',
                    emptyMsg: "No topics to display",
                },
                tbar: [{
                    xtype: 'textfield',
                    emptyText: 'search...',
                    enableKeyEvent: true,
                    reference: 'srchText',
                    width: 300,
                    listeners: {
                        keyup: 'onSrchText'
                    }
                }, {
                    xtype: 'button',
                    tooltip: 'Search',
                    iconCls: 'fas fa-search',
                    handler: 'onSearch',
                    reference: 'srchBtn',
                    style: {
                        'background-color': 'transparent',
                        border: 0,
                    }
                }, '-', {
                    xtype: 'button',
                    tooltip: 'Refresh',
                    iconCls: 'fas fa-sync-alt',
                    handler: 'onRefresh',
                }, '-', {
                    xtype: 'button',
                    text: 'Remove',
                    iconCls: 'fas fa-minus-circle',
                    reference: 'btnRemoveStudent',
                    handler: 'onRemoveClick',
                    // id: 'red'
                }, '-', {
                    xtype: 'button',
                    tooltip: 'Download',
                    handler: 'onDownloadCSVClick',
                    iconCls: 'fas fa-download',
                }],
            });

        this.callParent(arguments);
    },
    listeners: {
        itemdblclick: function (grid, column) {
            // Handle the double-click event here using the 'record' parameter
            var record = column.getData();
            // console.log("Double-clicked record:", record);

            // if (selectedRecord) {
            //                  this.getView().getForm().loadRecord(rec);
            //              }

            var detailView = Ext.create('HMS.view.desktop.window.EditPView', {
            });

            // Show the view in a window or another container
            var window = Ext.create('Ext.window.Window', {
                title: 'Patient Details',
                id:'editPatientId',
                // layout: 'fit',
                items: [detailView]
            });
            window.show();
            Ext.getCmp('pid').setValue(record.patient_serial_no);
            Ext.getCmp('patient_nameId').setValue(record.tx_patient_name);
            Ext.getCmp('patient_ageId').setValue(record.patient_age);
            Ext.getCmp('tx_patient_gender').setValue(record.tx_patient_gender);
            Ext.getCmp('department_id').setValue(record.department_id);
            Ext.getCmp('tx_patient_problem').setValue(record.tx_patient_problem);
            Ext.getCmp('tx_patient_address').setValue(record.tx_patient_address);
            Ext.getCmp('tx_patient_Phone').setValue(record.tx_patient_Phone);
            Ext.getCmp('doctor_id').setValue(record.doctor_id);
            Ext.getCmp('dt_visit_date').setValue(record.dt_visit_date);
        }
    }
});
