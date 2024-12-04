/**
 * This view is an example list of people.
 */
Ext.define('HMS.view.main.DoctorList', {
    extend: 'Ext.grid.Panel',
    xtype: 'doctorlist',
    id:'doct_list',
    // frame: true,
    height: 500,
    // width: 700,
    // id: 'paging',

    controller: 'doctorController',
    requires: [
        'HMS.store.DoctorStore',
    ],


    store: {
        type: 'doctor'
    },

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",
    },

    tbar: [{
        xtype: 'textfield',
        emptyText: 'search...',
        enableKeyEvents: true,
        reference: 'srchTextForDoctor',
        width: 300,
        listeners: {
            keyup: 'onSrchTextForDoctor'
        }
    }, {
        xtype: 'button',
        tooltip: 'Search',
        iconCls: 'fas fa-search',
        handler: 'onSearchDoctorByNameOrID',
        reference: 'srchBtnForDoctor',
        style: {
            'background-color': 'transparent',
            border: 0,
        }
    }, '-', {
        xtype: 'button',
        tooltip: 'Refresh',
        iconCls: 'fas fa-sync-alt',
        handler: 'onRefreshForDoctor',
    }, {
        xtype: 'button',
        text: 'Remove',
        iconCls: 'fas fa-minus-circle',
        reference: 'btnRemoveDoctor',
        handler: 'onRemoveClickDoctor',
    }, {
        xtype: 'button',
        tooltip: 'Download',
        iconCls: 'fas fa-download',
        handler: 'onDownloadCSVClickForDoctor',
    },

    ],

    columns: [
        { text: 'Doctor Id', dataIndex: 'doctor_id', flex: 0.5 },
        { text: 'Department Id', dataIndex: 'department_id', flex: 1 },
        { text: 'Name', dataIndex: 'tx_doctor_name', flex: 1 },
        { text: 'Gender', dataIndex: 'tx_doctor_gender', flex: 0.5 },
        { text: 'Degree', dataIndex: 'tx_doctor_degree', flex: 1 },
        { text: 'Schedule', dataIndex: 'tx_doctor_schedule', flex: 1 },
        { text: 'Phone', dataIndex: 'tx_doctor_phone_no', flex: 1 },
        { text: 'Doctor Fee', dataIndex: 'doctor_fee_bdt', flex: 0.5 },

        {
            text: 'Photo', width: 100, dataIndex: 'doctor_photo', sortable: true,
            renderer: function (value) {
                return '<img src="' + value + '" width="70" height="70" />';

            }
        },
        // {
        //     text: 'Photo', width: 100, dataIndex: 'doctor_photo', sortable: true,
        //     renderer: function (value) {
        //         console.log(value)
        //         var test = 'file:///C:/Tauhid/hms/resources/dr1.png'
        //         return '<img src="' + value + '" width="70" height="70" />';

        //     }
        // },

        // {
        //     xtype: 'widgetcolumn',
        //     width: 100,
        //     widget: {
        //         xtype: 'button',
        //         iconCls: 'fas fa-edit',
        //         handler: 'onEditCompanyClick'
        //     },
        //     widget: {
        //         xtype: 'button',
        //         iconCls: 'fas fa-edit',
        //         handler: 'onEditCompanyClick'
        //     },
        // },
        // {
        //     xtype: 'widgetcolumn',
        //     width: 70,
        //     {
        //         xtype: 'button',
        //         iconCls: 'fas fa-trash',
        //         handler: 'onEditCompanyClick'
        //     }
        // }
    ],
    listeners: {
        itemdblclick: function (grid, column) {
            // Handle the double-click event here using the 'record' parameter
            var record = column.getData();


            var detailView = Ext.create('HMS.view.desktop.window.EditDoctor', {
            });


            var window = Ext.create('Ext.window.Window', {
                title: 'Doctor Info',
                id: 'doctor_viewId',

                items: [detailView]
            });
            window.show();

            Ext.getCmp('docid').setValue(record.doctor_id);
            Ext.getCmp('d_department_id').setValue(record.department_id);
            Ext.getCmp('dName').setValue(record.tx_doctor_name);
            Ext.getCmp('dDegree').setValue(record.tx_doctor_degree);
            Ext.getCmp('dGender').setValue(record.tx_doctor_gender);
            Ext.getCmp('dSchedule').setValue(record.tx_doctor_schedule);
            Ext.getCmp('dPhone').setValue(record.tx_doctor_phone_no);
            Ext.getCmp('doctor_fee_bdt').setValue(record.doctor_fee_bdt);
        }
    }
});
