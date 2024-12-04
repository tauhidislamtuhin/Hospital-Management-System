Ext.define('HMS.view.desktop.window.EditPView', {
    extend: 'Ext.panel.Panel',
    xtype: 'paitent_update',
    controller: 'addPatientController',
    id: 'EP',
    
    height: 500,
    width: 400,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    autoShow: false,
    scrollable: true,
    bodyPadding: 10,
    constrain: true,
    maximizable: false,
    items: [
        {
            margin: ' 0 0 15',
            layout: 'anchor',
            defaultType: 'textfield',

            items: [{
                fieldLabel: 'Id',
                id: 'pid',
                readOnly: true
            }, {
                fieldLabel: 'Name',
                id: 'patient_nameId',
            },
            {
                fieldLabel: 'Age',
                id: 'patient_ageId',
            },
            {
                xtype: 'radiogroup',
                fieldLabel: 'Gender',
                id: 'tx_patient_gender',
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
                fieldLabel: 'Problem',
                id: 'tx_patient_problem',
            },
            {
                fieldLabel: 'Patient Address',
                id: 'tx_patient_address',
            },
            {
                fieldLabel: 'Patient Phone',
                id: 'tx_patient_Phone',
            },
             {
                fieldLabel: 'Visit Date',
                id: 'dt_visit_date',
            },
            {
                xtype: 'button',
                text: 'Remove',
                autoSize: true,
                handler: 'removePaitenthandler',
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
                handler: 'updatePaitenthandler',
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
        //  {
        //     xtype: 'container',
        //     layout: 'hbox',
        //     height: 50,
        //     margin: '0 0 5 0',
        //     left: '10px',
        //     defaultType: 'button',
        //     items: [{
        //         text: 'Update Paitent',
        //         // disabled: true,
        //         // formBind: true,
        //         width: 150,
        //         handler: 'patientUpdate'
        //     }
        //     ]
        // }


    ],



})