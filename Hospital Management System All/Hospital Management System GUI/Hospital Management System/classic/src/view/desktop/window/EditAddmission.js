Ext.define('HMS.view.desktop.window.EditAddmission', {
    extend: 'Ext.panel.Panel',
    xtype: 'addmission_update',
    controller: 'admissionController',

    id: 'EA',

    height: 350,
    width: 350,
    autoShow: false,
    scrollable: true,
    bodyPadding: 10,
    constrain: true,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
        {
            // xtype: 'fieldset',


            margin: ' 0 0 15',
            layout: 'anchor',
            defaultType: 'textfield',
            items: [{
                fieldLabel: 'Id',
                id: 'adid',
                readOnly: true
            }, {
                fieldLabel: 'Serial No.',
                id: 'patient_serial_noId',
                readOnly: true
            }, {
                xtype: 'datefield',
                flex: 1,
                fieldLabel: 'Admission Date',
                dataIndex: 'admission_date',
                id: 'admission_date',
                allowBlank: false,
                format: 'Y-m-d',
            },
            {
                fieldLabel: 'Department Id',
                id: 'department_id',
            },
            {
                fieldLabel: 'Doctor Id',
                id: 'doctor_id',

            },

            {

                fieldLabel: 'Patient Documents',
                id: 'patient_documents',
                xtype: 'filefield',
                fieldLabel: 'Upload Documents ',
                name: 'patient_documents',
                labelWidth: 120,
                buttonText: 'Browse',
                emptyText: 'Select a JPG file...',
                allowBlank: false
            },
            {
                xtype: 'button',
                text: 'Remove',
                autoSize: true,
                handler: 'removeAdmission',
                height: 30,
                width: 100,
                margin: '10 40 0 20',
                style: {
                    'text-align': 'center',
                    'letter-spacing': '1.25px',
                    'font-size': '14px',
                    // 'background-color': '#f44336',


                }
            },
            {
                xtype: 'button',
                text: 'Update',
                autoSize: true,
                handler: 'updateAdmission',
                height: 30,
                width: 100,
                margin: '10 20 0 0',
                style: {
                    'text-align': 'center',
                    'letter-spacing': '1.25px',
                    'font-size': '14px'
                }
            }
            ],
            // dockedItems: [{
            //     xtype: 'button',
            //     dock: 'bottom',
            //     text: 'Update',
            //     handler: 'addmissionUpdate'
            // }]
        }]


})