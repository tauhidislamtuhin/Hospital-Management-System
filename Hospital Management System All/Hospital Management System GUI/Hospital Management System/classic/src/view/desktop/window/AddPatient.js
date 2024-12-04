Ext.define('HMS.view.desktop.window.AddPatient', {
    extend: 'Ext.form.Panel',
    xtype: 'form-grid',
    controller: 'addPatientController',
    // id: 'AP',


    // controller: 'form-checkout',

    // requires: [
    //     'KitchenSink.model.State',
    //     'KitchenSink.store.States'
    // ],

    title: 'Add Patient',
    // width: 620,
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
        collapsible: true,
        collapsed: true,
        defaults: {
            anchor: '100%',
            componentCls: ""

        },

        items: [
            , {
                xtype: 'container',
                layout: 'hbox',
                defaultType: 'textfield',
                margin: '0 0 5 0',
                items: [{
                    fieldLabel: 'Paitent Name',
                    id: 'tx_patient_name',
                    dataIndex: 'tx_patient_name',
                    labelWidth: 110,
                    emptyText: 'Patient Name',
                    flex: 1,
                    allowBlank: false
                },]
            }, {
                xtype: 'container',
                layout: 'hbox',
                defaultType: 'textfield',
                margin: '0 0 5 0',

                items: [{
                    xtype: 'numberfield',
                    id: 'patient_age',
                    fieldLabel: 'Age',
                    dataIndex: 'patient_age',
                    margin: '10 0 0 0',
                    labelWidth: 110,
                    emptyText: 'Patient Age',
                    flex: 1,
                    allowBlank: false
                }, {
                    xtype: 'radiogroup',
                    id: 'genderid',
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
                },]

            }, {
                xtype: 'textfield',
                id: 'tx_patient_Phone',
                flex: 1,
                fieldLabel: 'Phone',
                validator: function (value) {
                    // Remove any non-digit characters from the input value
                    var phoneNumber = value.replace(/\D/g, '');

                    // Check if the resulting value is exactly 11 digits
                    if (phoneNumber.length === 11) {
                        return true; // The input is valid
                    } else {
                        return 'Phone number must be 11 digits.';
                    }
                },
                allowBlank: false,
            },
            {
                xtype: 'datefield',
                flex: 1,
                id: 'dt_visit_date',
                fieldLabel: 'Visit Date',
                dataIndex: 'dt_visit_date',
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
            }, {
                flex: 1,
                fieldLabel: 'Problem',
                id: 'tx_patient_problem',
                dataIndex: 'problem',
                allowBlank: false,
            },
            {
                flex: 1,
                fieldLabel: 'Address',
                id: 'tx_patient_address',
                dataIndex: 'address',
                allowBlank: false,
            }
        ]
    },
    {
        width: 620,
        xtype: 'fieldset',
        title: 'Doctors Information',
        layout: 'anchor',
        collapsible: true,
        collapsed: true,

        defaults: {
            anchor: '100%',
            componentCls: ""
        },
        items: [{
            xtype: 'combobox',
            fieldLabel: 'Department',
            allowBlank: false,
            name: 'department_name',
            id: 'tx_department_name',
            store: {
                type: 'departmentstore'
            },
            valueField: 'department_id',
            displayField: 'tx_department_name',
            typeAhead: true,
            queryMode: 'local',
            emptyText: 'Select a Department...'
        }, {

            xtype: 'combobox',
            fieldLabel: 'Doctor Id',
            id: 'doctor_id',
            allowBlank: false,
            name: 'doctor_id',
            store: {
                type: 'doctor'
            },
            valueField: 'doctor_id',
            displayField: 'doctor_id',
            typeAhead: true,
            queryMode: 'local',
            emptyText: 'Select a Department...'

        }]
    }, {
        width: 620,
        xtype: 'fieldset',
        title: 'Payment',
        collapsible: true,
        collapsed: true,

        layout: 'anchor',
        defaults: {
            anchor: '100%',
            componentCls: ""
        },

        items: [{
            xtype: 'radiogroup',
            id: 'payment_option',
            flex: 1,


            allowBlank: false,
            // Maps the value of this radiogroup to the child radio with matching
            // inputValue.
            simpleValue: true,

            layout: {
                autoFlex: false
            },
            items: [{
                boxLabel: 'VISA',
                inputValue: 'visa',

            }, {
                boxLabel: 'MasterCard',
                inputValue: 'mastercard'
            }, {
                boxLabel: 'American Express',
                inputValue: 'American Express'
            }, {
                boxLabel: 'Discover',
                inputValue: 'Discover'
            }, , {
                boxLabel: 'Cash',
                inputValue: 'Cash'
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            margin: '0 0 5 0',

            items: [{
                xtype: 'textfield',
                fieldLabel: 'Card Number',
                id: 'ccNumber',
                name: 'ccNumber',
                labelWidth: 110,
                flex: 1,
                allowBlank: false,
                minLength: 15,
                maxLength: 16,
                enforceMaxLength: true,
                maskRe: /\d/
            }, {
                xtype: 'fieldcontainer',
                fieldLabel: 'Expiration',
                labelWidth: 75,
                layout: 'hbox',
                componentCls: "",

                items: [{
                    xtype: 'combobox',
                    name: 'ccExpireMonth',
                    id: 'ccExpireMonth',
                    displayField: 'name',
                    valueField: 'number',
                    queryMode: 'local',
                    emptyText: 'Month',
                    hideLabel: true,
                    width: 100,
                    allowBlank: false,
                    forceSelection: true,

                    // store: {
                    //     type: 'months'
                    // }
                }, {
                    xtype: 'numberfield',
                    id: 'ccExpireYear',
                    name: 'ccExpireYear',
                    padding: 0,
                    width: 90,
                    hideLabel: true,
                    value: new Date().getFullYear(),
                    minValue: new Date().getFullYear(),
                    allowBlank: false
                }]
            },]
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Fee Pay (BDT):',
            id: 'fee',
            name: 'ccName',
            valueField: 'number',
            labelWidth: 110,
            allowBlank: false
        },]
    }, {
        xtype: 'container',
        layout: 'hbox',
        margin: '0 0 5 0',
        defaultType: 'button',
        items: [{
            text: 'Save Patient',
            // disabled: true,
            // formBind: true,
            width: 150,
            handler: 'patientSave'
        }
        ]
    }],
});