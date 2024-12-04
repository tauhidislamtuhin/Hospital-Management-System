Ext.define('HMS.view.desktop.edit.AddDeparment', {
    extend: 'Ext.panel.Panel',
    xtype: 'add-department',
    controller: 'departmentEditController',
    // requires: [
    //     'WebDesktop.view.main.teachers.TeacherEditController',
        
    // ],

    id:'tedit_win',

    height: 150,
    width: 350,
    autoShow: false,
    scrollable: true,
    // minimizable: true,
    bodyPadding: 10,
    constrain: true,
    // closable: true,
    maximizable: false,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    // { text: 'Treatment Id', dataIndex: 'treatment_id', flex: 1 },
    // { text: 'Patient Serial No', dataIndex: 'patient_serial_no', flex: 1 },
    // { text: 'Patient Name', dataIndex: 'tx_patient_name', flex: 1 },
    // { text: 'Patient Age', dataIndex: 'patient_age', flex: 1 },
    // { text: 'Doctor Name', dataIndex: 'tx_doctor_name', flex: 1 },
    // { text: 'Medicine Names', dataIndex: 'tx_medicine_names', flex: 1 },
    // { text: 'Test Name', dataIndex: 'tx_test_names', flex: 1 },
    // { text: 'Treatment Names', dataIndex: 'treatment_fee', flex: 1 },
    // plain: true,
    // Add your view components here
    items: [
        {
            // xtype: 'fieldset',


            
            layout: 'anchor',
            defaultType: 'textfield',

            items: [
            {fieldLabel: 'Department Name',
            id: 'tx_department_name',
            
            },
            {
                xtype: 'button',
                text: 'Add Department',
                autoSize: true,
                handler: 'addDoctorButton',
                height: 30,
                width: 150,
                margin: '10 20 0 175',
                style: {
                    'text-align': 'center',
                    'letter-spacing': '1.25px',
                    'font-size': '14px'
                }
            }
            ]
        }],

       
})