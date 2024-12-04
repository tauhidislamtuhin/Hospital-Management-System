Ext.define('HMS.view.logView.Registation', {
    extend: 'Ext.panel.Panel',
    xtype: 'reg-view',
   // id: 'RVL',

    controller: 'loginController',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [

        {
            xtype: 'form',
            height: 500,
            width: 340,
            reference: 'formReg',
            bodyPadding: 30,
            bodyStyle: {
                'background-color': '#F7F9F9 !important; opacity: 0.80',
                'border-radius': '10px',
                'border': '3px solid #0F7CC1 !important',
            },
            items: [{
                xtype: 'component',
                width: 280,
                height: 27,
                margin: '9 0 0 0',
                html: 'Create Account',
                style: {
                    'font-size': '20px',
                    'text-align': 'center',
                    'margin': 'auto'
                }
            },
            {
                xtype: 'component',
                reference: 'formLoginFailure',
                tpl: '<tpl if="errors.length">' +
                    '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                    ' Login Failure</span>' +
                    '</tpl>',
                height: 26,
                width: 280,
                margin: '9 0 0 0',
                style: {
                    'font-size': '20px',
                    'text-align': 'center'
                }
            },
            {
                xtype: 'combobox',
                fieldLabel: 'User Roll',
                id: 'user_roll',
                allowBlank: false,
                margin: "25 0 0 0",
                name: 'user_roll',
                store: [
                    'Admin',
                    'Receptionist',
                    'Doctor'
                ],
                valueField: 'abbr',
                displayField: 'doctor_id',
                typeAhead: true,
                queryMode: 'local',
                emptyText: 'Select a Roll...'
            },
            {
                xtype: 'textfield',
                name: 'useremail',
                fieldLabel: 'Email Address',
                id: 'remail',
                vtype: 'email',
                allowBlank: false,
                minLength: 6,
                required: true,
                margin: "25 0 0 0",
                emptyText: 'Email Address',
            },
            {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'User Name',
                id: 'ruser',
                vtype: 'username',
                allowBlank: false,
                minLength: 6,
                required: true,
                margin: "25 0 0 0",
                emptyText: 'User Name',
            },
            {
                xtype: 'textfield',
                name: 'password1',
                fieldLabel: 'Password',
                inputType: 'password',
                
                style: 'margin-top: 15px',
                emptyText: 'Password',
                allowBlank: false,
                minLength: 8
            }, {
                xtype: 'textfield',
                id: 'rpass',
                name: 'password2',
                fieldLabel: 'Repeat Password',
                inputType: 'password',
                emptyText: 'Conform Password',
                allowBlank: false,

                /*
                 * Custom validator implementation - checks that the value matches what was entered into
                 * the password1 field.
                 */
                validator: function (value) {
                    var password1 = this.previousSibling('[name=password1]');

                    return (value === password1.getValue()) ? true : 'Passwords do not match.';
                }
            },
            {
                xtype: 'button',
                text: 'Register',
                autoSize: true,
                handler: 'onReg',
                height: 30,
                width: 280,
                margin: '30 0 0 0',
                style: {
                    'text-align': 'center',
                    'letter-spacing': '1.25px',
                    'font-size': '14px'
                }
            },
            ]
        },
        // {
        //     xtype: 'panel', // You can use a panel or any other container type
        //     id: 'reg',
        //     // padding: '5px',
        //     items: [{
        //         xtype: 'container', // You can use a container to control the layout
        //         margin: '15 0 0 0',
        //         id: 'CV', //container view
        //         html: "Already have account  ?<a href='#' class='terms' style='color:black;text-decoration:none;font-weight: bold;'>Login</a>.",
        //         listeners: {
        //             click: {
        //                 element: 'el', // Use 'el' to listen to the whole container
        //                 fn: 'onlogR'
        //             }
        //         }
        //         // handler:'onLogR',
        //     }]
        // }
    ]

});

