Ext.define('HMS.view.logView.LoginPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'login-view',
    id: 'LV',

    controller: 'loginController',
    // style: {
    //     'background-image': 'url(resources/image/log5.jpg)',
    //     //'background-color': 'green',
    //     'background-size': 'cover', // Adjust the size as needed (e.g., 'contain', '50% 50%', etc.)
    //     'background-repeat': 'no-repeat',


    // },


    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },




    items: [

        {
            xtype: 'form',
            height: 350,
            width: 340,
            reference: 'formLogin',
            bodyPadding: 30,
            bodyStyle: {
                'background-color': '#F7F9F9 !important; opacity: 0.80',
                'border-radius': '10px',
                'border': '3px solid #0F7CC1 !important',
            },
            items: [
                // {
                //     xtype: 'image',
                //     height: 90,
                //     width: 280,
                //     margin: '0 0 0 0',
                //     alt: 'sencha-logo-image',
                //     src: Ext.theme.name === "Aria" ? 'resources/images/SenchaLogoWht.svg' : 'resources/images/SenchaLogoLg.svg'
                // },
                {
                    xtype: 'component',
                    width: 280,
                    height: 27,
                    margin: '9 0 0 0',
                    html: 'Login Into Your Account',
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
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    id: 'username',
                    width: 280,
                    margin: "25 0 0 0",
                    fieldLabel: 'User Name',
                    name: 'user_name',
                    emptyText: 'User name',
                    msgTarget: 'qtip',
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    inputType: 'password',
                    allowBlank: false,
                    required: true,
                    id: 'password',
                    width: 280,
                    fieldLabel: 'Password',
                    name: 'pass',
                    emptyText: 'password',
                    msgTarget: 'qtip',
                    margin: "25 0 0 0",
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
               
                {
                    xtype: 'button',
                    text: 'LOG IN',
                    autoSize: true,
                    handler: 'onLogin',
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
        //     items: [{
        //         xtype: 'container', // You can use a container to control the layout
        //         margin: '15 0 0 0',
        //         html: "Don't have account ? <a href='#' class='terms' style='color:black;text-decoration:none;font-weight: bold;'>Register</a>.",
        //         listeners: {
        //             click: {
        //                 element: 'el', // Use 'el' to listen to the whole container
        //                 fn: 'onRegisterL'
        //             }
        //         }
        //     }]
        // }
    ]

});

