Ext.define('HMS.view.desktop.window.PaitentTab', {
    extend: 'Ext.form.Panel',
    xtype: 'addPaitent',
    controller: 'form-checkout',

    requires: [
        // 'KitchenSink.model.State',
        // 'KitchenSink.store.States'
    ],

    title: 'Add Paitent',
    width: 700,
    height: 600,
    bodyPadding: 10,
    frame: true,
    scrollable: true,
    layout: {
        type: 'vbox',
        align: 'middle'
    },

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 90,
        msgTarget: Ext.supports.Touch ? 'side' : 'qtip'
    },

    items: [{
        width: 700,
        xtype: 'fieldset',
        title: 'Patient Information',
        defaultType: 'textfield',
        layout: 'anchor',
        defaults: {
            anchor: '100%',
            componentCls: ""
        },
        items: [{
            xtype: 'fieldcontainer',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                defaultType: 'textfield',
                margin: '0 0 5 0',
                items: [{
                    fieldLabel: 'Name',
                    name: 'patient_name',
                    reference: 'mailingStreet',

                    labelWidth: 110,
                    allowBlank: false,
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 5 0',

                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Age',
                        name: 'paitent_age',
                        reference: 'mailingCity',

                        labelWidth: 110,
                        flex: 1,
                        allowBlank: false,
                    }]
                }],


            }]
        }, {
            xtype: 'radiogroup',
            margin: '5 0 10 0',
            fieldLabel: 'Gender',
            allowBlank: false,

            // Maps the value of this radiogroup to the child radio with matching
            // inputValue.
            simpleValue: true,
            columns: 3,

            items: [{
                boxLabel: 'Male',
                inputValue: 0
            }, {
                boxLabel: 'Female',
                inputValue: 1
            },
            {
                boxLabel: 'Others',
                inputValue: 2
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            defaultType: 'textfield',
            margin: '0 0 5 0',
            items: [{
                fieldLabel: 'Street Address',
                name: 'mailingStreet',
                reference: 'mailingStreet',

                labelWidth: 110,
                allowBlank: false,

                listeners: {
                    change: 'onMailingAddrFieldChange'
                }
            }, {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',

                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'City',
                    name: 'mailingCity',
                    reference: 'mailingCity',

                    labelWidth: 110,
                    flex: 1,
                    allowBlank: false,

                    listeners: {
                        change: 'onMailingAddrFieldChange'
                    }
                }]
            }],


        }]
    }, {
        width: 700,
        xtype: 'fieldset',
        title: 'Information',
        reference: 'mailingAddressForm',

        defaultType: 'textfield',
        layout: 'anchor',
        defaults: {
            anchor: '100%',
            componentCls: ""
        },
        items: [{
            xtype: 'combobox',
            fieldLabel: 'Department',
            name: 'mailingState',
            reference: 'mailingState',

            width: 125,
            forceSelection: true,
            enforceMaxLength: true,
            labelWidth: 110,
            flex: 1,
            valueField: 'department_name',
            displayField: 'department_name',
            typeAhead: true,
            queryMode: 'local',
            allowBlank: false,

            listConfig: {
                minWidth: null
            },
            store: {
                type: 'doctorstore'
            },

            listeners: {
                change: 'onMailingAddrFieldChange'
            }
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Doctor',
            name: 'mailingState',
            reference: 'mailingState',

            width: 125,
            forceSelection: true,
            enforceMaxLength: true,
            labelWidth: 110,
            flex: 1,
            valueField: 'doctor_name',
            displayField: 'doctor_name',
            typeAhead: true,
            queryMode: 'local',
            allowBlank: false,

            listConfig: {
                minWidth: null
            },
            store: {
                type: 'doctorstore'
            },

            listeners: {
                change: 'onMailingAddrFieldChange'
            }
        }, {
            xtype: 'container',
            layout: 'hbox',
            defaultType: 'textfield',
            margin: '0 0 5 0',
            items: [{
                xtype: 'datefield',
                fieldLabel: 'Visit Date',
                // margin: '30 0 0 0',
                dataIndex: 'visit_date',
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
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',

                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Fee (BDT)',
                    name: 'visit_fee_bdt',
                    reference: 'mailingCity',
                    flex: 1,
                    labelWidth: 110,
                    flex: 1,
                    allowBlank: false,
                }]
            }],


        }]

    },
    //   {
    //     width:700,
    //     xtype: 'fieldset',
    //     title: 'Payment',

    //     layout: 'anchor',
    //     defaults: {
    //         anchor: '100%',
    //         componentCls: ""
    //     },

    //     items: [{
    //         xtype: 'radiogroup',

    //         layout: {
    //             autoFlex: false
    //         },

    //         defaults: {
    //             name: 'ccType',
    //             margin: '0 15 0 0'
    //         },

    //         items: [{
    //             boxLabel: 'VISA',
    //             inputValue: 'visa',
    //             checked: true
    //         }, {
    //             boxLabel: 'MasterCard',
    //             inputValue: 'mastercard'
    //         }, {
    //             boxLabel: 'American Express',
    //             inputValue: 'amex'
    //         }, {
    //             boxLabel: 'Discover',
    //             inputValue: 'discover'
    //         }]
    //     }, {
    //         xtype: 'textfield',
    //         fieldLabel: 'Name On Card',
    //         name: 'ccName',
    //         labelWidth: 110,
    //         allowBlank: false
    //     }, {
    //         xtype: 'container',
    //         layout: 'hbox',
    //         margin: '0 0 5 0',

    //         items: [{
    //             xtype: 'textfield',
    //             fieldLabel: 'Card Number',
    //             name: 'ccNumber',
    //             labelWidth: 110,
    //             flex: 1,
    //             allowBlank: false,
    //             minLength: 15,
    //             maxLength: 16,
    //             enforceMaxLength: true,
    //             maskRe: /\d/
    //         }, {
    //             xtype: 'fieldcontainer',
    //             fieldLabel: 'Expiration',
    //             labelWidth: 75,
    //             layout: 'hbox',
    //             componentCls: "",

    //             items: [{
    //                 xtype: 'combobox',
    //                 name: 'ccExpireMonth',

    //                 displayField: 'name',
    //                 valueField: 'number',
    //                 queryMode: 'local',
    //                 emptyText: 'Month',
    //                 hideLabel: true,
    //                 width: 100,
    //                 allowBlank: false,
    //                 forceSelection: true,

    //                 // store: {
    //                 //     type: 'months'
    //                 // }
    //             }, {
    //                 xtype: 'numberfield',
    //                 name: 'ccExpireYear',
    //                 padding: 0,
    //                 width: 90,
    //                 hideLabel: true,
    //                 value: new Date().getFullYear(),
    //                 minValue: new Date().getFullYear(),
    //                 allowBlank: false
    //             }]
    //         }]
    //     }]
    // }
    {
        xtype: 'container',
        layout: 'hbox',
        margin: '0 0 5 0',

        items: [{
            xtype: 'button',
            text: 'Reset',
            handler: 'onResetClick',
        }, {
            xtype: 'button',
            text: 'Save',
            handler: 'onResetClick',
        }]
    }],

    // buttons: [{
    //     text: 'Reset',
    //     handler: 'onResetClick'
    // }, {
    //     text: 'Save',
    //     width: 150,
    //     handler: 'onCompleteClick'
    // }]
});