Ext.define('HMS.view.desktop.edit.AddTreatment', {
    extend: 'Ext.panel.Panel',
    xtype: 'addtreatment',
    controller: 'editTreatmentController',
    // requires: [
    //     'WebDesktop.view.main.teachers.TeacherEditController',
        
    // ],

    id:'tedit_win',

    height: 450,
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


            margin: ' 0 0 15',
            layout: 'anchor',
            defaultType: 'textfield',

            items: [{
                fieldLabel: 'Treatment Id',
                id: 'idt',
                readOnly: true
            }, {
                fieldLabel: 'Patient Serial No',
                id: 'serial_no',
                 
            },
            {fieldLabel: 'Doctor Id',
            id: 'ddid',
            
            },
        
            {
                fieldLabel: 'Medicine Names',
                id: 'mn',
                
            },
            {
                fieldLabel: 'Test Name',
                id: 'tn',
                
            },
            {
                fieldLabel: 'Test Fee',
                id: 'tf',
                
            },
           
            {
                xtype: 'button',
                text: 'Add Treatment',
                autoSize: true,
                handler: 'addTreatment',
                height: 30,
                
                margin: '10 10 10 10',
                style: {
                    'text-align': 'center',
                    'letter-spacing': '1.25px',
                    'font-size': '14px'
                }
            }
            ]
        }],

    

       
})