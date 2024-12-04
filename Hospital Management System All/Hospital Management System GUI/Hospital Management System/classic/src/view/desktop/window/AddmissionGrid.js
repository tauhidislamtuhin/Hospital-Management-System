/**
 * This view is an example list of people.
 */
Ext.define('HMS.view.main.AddmissionGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'addmissionPaitent',
    // frame: true,
    // height: 500,
    // width: 700,
    id: 'addpgrid',

    controller: 'paitentController',
    requires: [
        'HMS.store.AddmissionPStore'
    ],


    store: {
        type: 'addmission'
    },

    // listeners: {
    //     selectionchange: 'onSelectionChange',
        
    // },

    columns: [
        { text: 'Admission Id', dataIndex: 'admission_id' },
        { text: 'Serial No.', dataIndex: 'patient_serial_no' },
        { text: 'Admission Date', dataIndex: 'admission_date' },
        { text: 'Department Id', dataIndex: 'department_id', flex: 1 },
        { text: 'Doctor Id', dataIndex: 'doctor_id', flex: 1 },
        { text: 'Patient Documents', dataIndex: 'patient_documents', flex: 1 },
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
    }],
    listeners: {
        afterrender: function () {
            console.log(this)
        },
        itemdblclick: function (grid, column) {
            // Handle the double-click event here using the 'record' parameter
            var record = column.getData();
            // console.log("Double-clicked record:", record);

            // if (selectedRecord) {
            //                  this.getView().getForm().loadRecord(rec);
            //              }

            var detailView = Ext.create('HMS.view.desktop.window.EditAddmission', {
            });

            // Show the view in a window or another container
            var window = Ext.create('Ext.window.Window', {
                title: 'Addmission Paitent Info',
                id:'admissionWindowId',
                // layout: 'fit',
                items: [detailView]
            });
            window.show();

            Ext.getCmp('adid').setValue(record.admission_id);
            Ext.getCmp('patient_serial_noId').setValue(record.patient_serial_no);
            Ext.getCmp('admission_date').setValue(record.admission_date);
            Ext.getCmp('doctor_id').setValue(record.doctor_id);
            Ext.getCmp('department_id').setValue(record.department_id);
            Ext.getCmp('patient_documents').setValue(record.patient_documents);

        }
    }
});
