Ext.define('HMS.view.desktop.window.AddDoctor', {
    extend: 'Ext.form.Panel',
    xtype: 'doctor-form',
    controller: 'addDoctorController',
    title: 'Add Doctor',
    width: 620,
    height: 600,
    layout: {
        align: 'middle',
        type: 'vbox'
    },
    bodyPadding: 10,
    frame: true,
    scrollable: true,

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 120, // Adjust the label width as needed
        msgTarget: Ext.supports.Touch ? 'side' : 'qtip'
    },


    items: [{
        width: 620,
        xtype: 'fieldset',
        title: 'Doctor Information',
        defaultType: 'textfield',
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
            displayField: 'tx_department_name',
            id: 'department_id',
            typeAhead: true,
            queryMode: 'local',
            emptyText: 'Select a Department...'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Doctor Name',
            allowBlank: false,
            name: 'tx_doctor_name',
            id: 'tx_doctor_name'

        }, {
            xtype: 'radiogroup',
            id: 'gender',
            margin: '10 0 0 0',
            flex: 1,
            fieldLabel: 'Gender',

            allowBlank: false,
            // Maps the value of this radiogroup to the child radio with matching
            // inputValue.
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
            xtype: 'textfield',
            fieldLabel: 'Doctor Degree',
            allowBlank: false,
            name: 'tx_doctor_degree',
            id: 'tx_doctor_degree'

        }, {
            xtype: 'textfield',
            fieldLabel: 'Doctor Schedule',
            allowBlank: false,
            name: 'tx_doctor_schedule',
            id: 'tx_doctor_schedule',
            // store: {
            //     type: 'doctorstore'
            // },
            // valueField: 'tx_doctor_schedule',
            // displayField: 'tx_doctor_schedule',
            // typeAhead: true,
            // queryMode: 'local',
            // emptyText: 'Select Schedule...'
        },

        {
            fieldLabel: 'Phone Number',
            allowBlank: false,
            name: 'tx_doctor_phone_no',
            id: 'tx_doctor_phone_no',
            validator: function (value) {
                // Remove any non-digit characters from the input value
                var phoneNumber = value.replace(/\D/g, '');

                // Check if the resulting value is exactly 11 digits
                if (phoneNumber.length === 11) {
                    return true; // The input is valid
                } else {
                    return 'Phone number must be 11 digits.';
                }
            }
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Doctor Fee',
            allowBlank: false,
            name: 'doctor_fee_bdt',
            id: 'doctor_fee_bdt'

        },


        {
            xtype: 'filefield',
            id: 'doctor_photo',
            fieldLabel: 'Upload Photo (JPG)',
            name: 'doctor_photo',
            labelWidth: 120,
            buttonText: 'Browse',
            emptyText: 'Select a JPG file...',
            allowBlank: false
        }, {

            xtype: 'image',
            alt: 'doc-img',
            fieldLabel: 'Preview Photo',
            name: 'doctor_preview_photo',
            labelWidth: 120,
            height: 100,
            width: 100 // Adjust the width and height as needed
        },
        ]
    }, {
        xtype: 'container',
        layout: 'hbox',
        margin: '0 0 5 0',
        defaultType: 'button',
        items: [{
            text: 'Save Doctor',
            width: 150,
            handler: 'addDoctor'
        }]

    }]
});


