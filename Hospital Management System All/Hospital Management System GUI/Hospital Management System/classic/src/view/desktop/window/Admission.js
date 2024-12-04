Ext.define('HMS.view.main.Admission', {
    extend: 'Ext.form.Panel',
    xtype: 'admission-form',
    controller: 'admissionController',

    // requires: [
    //     'KitchenSink.model.State',
    //     'KitchenSink.store.States'
    // ],

    title: 'Admission for Indoor Patient',
    
    height: 1080,
    layout: {
        align: 'middle',
        type: 'vbox'
    },
    bodyPadding: 10,
    frame: true,
    scrollable: true,

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 90,
        msgTarget: Ext.supports.Touch ? 'side' : 'qtip'
    },

    items: [{
        width: 620,
        xtype: 'fieldset',
        title: 'Patient Information',
        defaultType: 'textfield',
        layout: 'anchor',
        defaults: {
            anchor: '100%',
            componentCls: ""

        },
        items: [{
            xtype: 'container',
            layout: 'hbox',
            defaultType: 'textfield',
            margin: '0 0 5 0',

            items: [{
                fieldLabel: 'Patient Serial no',
                name: 'patient_serial_no',
                labelWidth: 110,
                margin: '0 0 5 0',
                id: 'patient_serial_no',
                emptyText: 'Patient Serial no',
                flex: 1,
                allowBlank: false
            }],
        }, {
            xtype: 'datefield',
            flex: 1,
            fieldLabel: 'Admission Date',
            dataIndex: 'admission_date',
            id: 'admission_date',
            allowBlank: false,
            format: 'Y-m-d', // Date format (you can change it as needed)
            minValue: new Date(), // Set the minimum date to today to prevent past dates
            listeners: {
                select: function (datefield, date) {
                    // Close the date picker when a date is selected
                    datefield.collapse();
                },
                validator: function (value) {
                    // Custom validation logic to ensure the date is valid for appointments
                    if (value.getDay() === 0 || value.getDay() === 6) {
                        return 'Weekends are not valid appointment days';
                    }
                    // Add more custom validation rules as needed
                    return true; // Return true if the date is valid
                },
            },

            labelWidth: 110,
            allowBlank: false,
        }



        ]
    }, {
        width: 620,
        xtype: 'fieldset',
        title: 'Assigned Doctor Information',
        layout: 'anchor',

        defaults: {
            anchor: '100%',
            componentCls: ""
        },
        items: [{
            xtype: 'combobox',
            fieldLabel: 'Department Id',
            allowBlank: false,
            name: 'department_id',
            id: 'department_id',
            store: {
                type: 'departmentstore'
            },
            valueField: 'department_id',
            displayField: 'department_id',
            typeAhead: true,
            queryMode: 'local',
            emptyText: 'Select a Department...'
        }, {

            xtype: 'combobox',
            fieldLabel: 'Doctor Id',
            allowBlank: false,
            id: 'doctor_id1',
            name: 'doctor_id',
            store: {
                type: 'doctor'
            },
            valueField: 'doctor_id',
            displayField: 'doctor_id',
            typeAhead: true,
            queryMode: 'local',
            emptyText: 'Select a Doctor...'

        }]
    }, {
        width: 620,
        xtype: 'fieldset',
        layout: 'anchor',
        title: 'Patient Documents',
        defaults: {
            anchor: '100%',
            componentCls: ""
        },

        items: [{
            xtype: 'container',
            defaultType: 'textfield',
            items: [{
                xtype: 'filefield',

                fieldLabel: 'Patient Documents',
                name: 'patient_documents',
                id: 'patient_documents',
                labelWidth: 120, // Adjust the label width as needed
                buttonText: 'Browse',
                emptyText: 'Select a document...',
                allowBlank: false,

            }]
        }],
    },
    {
        xtype: 'container',
        layout: 'hbox',
        margin: '0 0 5 0',
        defaultType: 'button',
        items: [{
            text: 'Save Patient',
            width: 150,
            handler: 'addAdmission'
        }
        ]
    }],

});