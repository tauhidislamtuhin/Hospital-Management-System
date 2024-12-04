/**
 * This view is an example list of people.
 */
Ext.define('HMS.view.main.AdmissionPatientView', {
    extend: 'Ext.grid.Panel',
    xtype: 'addmissionlist',
    // frame: true,
    // height: 500,
    // width: 700,
    id: 'paging2',

    controller: 'paitentController',
    requires: [
        'HMS.store.AddmissionList'
    ],


    store: {
        type: 'addmissionlist'
    },

    listeners: {
        selectionchange: 'onSelectionChange'
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

    columns: [
        { text: 'Admission Id', dataIndex: 'admission_id' },
        { text: 'Serial No.', dataIndex: 'patient_serial_no' },
        { text: 'Patient Name', dataIndex: 'tx_patient_name' },
        { text: 'Patient Age', dataIndex: 'patient_age' },
        {text: 'Patient Gender', dataIndex: 'tx_patient_gender'},
        { text: 'DEpartment Name', dataIndex: 'tx_department_name' },
        { text: 'Doctor Name', dataIndex: 'tx_doctor_name', flex: 1 },
        { text: 'Visit', dataIndex: 'dt_visit_date', flex: 1 },
        
    ],

});
