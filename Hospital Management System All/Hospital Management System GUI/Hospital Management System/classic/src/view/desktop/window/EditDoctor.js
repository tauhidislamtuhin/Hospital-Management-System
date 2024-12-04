Ext.define('HMS.view.desktop.window.EditDoctor', {
    extend: 'Ext.panel.Panel',
    xtype: 'doctor_view',
    controller:'addDoctorController',
    

    height: 450,
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
                id: 'docid',
                readOnly: true
            }, 
            {
                fieldLabel: 'Depertment Id',
                id: 'd_department_id',
                readOnly: true
            },
            
            {
                fieldLabel: 'Name',
                id: 'dName',
            },
            {
                fieldLabel: 'Gender',
                id: 'dGender',
                xtype: 'radiogroup',
                simpleValue: true,
                columns: 3,

                items: [{
                    boxLabel: 'Male',
                    inputValue: 'Male'
                }, {
                    boxLabel: 'Female',
                    inputValue: 'Female',
                    margin: '0 5 0 0',
                },
                {
                    boxLabel: 'Others',
                    inputValue: 'Others',
                }]
            }, {
                fieldLabel: 'Doctor Degree',
                id: 'dDegree',

            }, {
                fieldLabel: 'Doctor Schedule',
                id: 'dSchedule',
                xtype: 'combobox',
                flex: 1,
                store: {
                    type: 'doctor'
                },
                valueField: 'tx_doctor_schedule',
                displayField: 'tx_doctor_schedule',

                typeAhead: true,
                queryMode: 'local',
                emptyText: 'Select Schedule...'
            }, {
                fieldLabel: 'Doctor Phone',
                id: 'dPhone',
            },
            {
                fieldLabel: 'Photo',
                id: 'dPhoto',
                xtype: 'filefield',
                fieldLabel: 'Upload Photo (JPG)',
                name: 'doctor_photo',
                labelWidth: 120,
                buttonText: 'Browse',
                emptyText: 'Select a JPG file...',
                allowBlank: false
            },
             {
                fieldLabel: 'Doctor Fee',
                id: 'doctor_fee_bdt',
            },
            {
                xtype: 'button',
                text: 'Remove',
                autoSize: true,
                handler: 'removeDoctor',
                height: 30,
                width: 100,
                margin: '10 40 0 20',
                style: {
                    'text-align': 'center',
                    'letter-spacing': '1.25px',
                    'font-size': '14px',
                    // 'background-color': '#f44336',
                    

            }},
            {
                xtype: 'button',
                text: 'Update',
                autoSize: true,
                handler: 'updateDoctor',
                height: 30,
                width: 100,
                margin: '10 20 0 0',
                style: {
                    'text-align': 'center',
                    'letter-spacing': '1.25px',
                    'font-size': '14px'
                }
            } 
            ]
        },
        ],


})