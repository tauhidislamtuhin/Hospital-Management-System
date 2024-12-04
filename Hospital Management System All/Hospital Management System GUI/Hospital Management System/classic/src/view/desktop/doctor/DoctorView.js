Ext.define('HMS.view.desktop.doctor.DoctorView',{
    extend: 'Ext.panel.Panel',
    xtype: 'doctor-view',
    id: 'doctorView',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'HMS.view.desktop.doctor.DoctorViewController',
        // 'HMS.view.main.MainModel',
    ],

    controller: 'doctorViewController',
    // viewModel: 'main',
    width: '100%',
    layout: 'fit',


    bbar: { //bottom-bar
        position: 'absolute',
        id: 'bottom-bar',
        items: [{
            xtype: 'button',
            iconCls: 'fa fa-leaf',
            id: 'startBtn',
            text: 'Start',
            menu: {
                items: [{
                    xtype: 'panel',
                    id: 'start-panel',
                    width: 250,
                    height: 300,
                    iconCls: 'fa fa-user',
                    title: {
                        xtype: 'button',
                        text: 'User Profile',
                        handler: 'onProfile'
                    },
                    dockedItems: [
                        {
                            dock: 'bottom',
                            xtype: 'button',
                            text: 'Logout',
                            id: 'logout',
                            handler: 'onLogout',
                        }
                    ],

                },]
            }
        }, '-', {
            xtype: 'container',
            width: '82%',
            height: 30,
            id: 'btnContainer',

        },'-',{
            reference: 'clock',
            xtype: 'tbtext',
            id: 'clock',
            text: Ext.Date.format(new Date(), 'g:i:s A'),
            listeners: {
                render: 'onWpRender',
                delay: 100
            },
        }, {
            xtype: 'button',
            id: "nBtn",
            reference: 'rich',
            html: "<img src='resources/images/n.png'>",
            style: {
                'background': 'transparent',
                'border': 0
            }
        }]
    },
    lbar: {
        id: 'left-bar',
        items: [{
            xtype: 'button',
            html: "<img src='resources/images/ga.png'><br><span style='color:white'>Patient<span>",
            handler: 'onDoctorIcon',
            style: {
                'background': 'transparent',
                border: 0
            }
        }, {
            xtype: 'button',
            html: "<img src='resources/images/notepad.png'><br><span style='color:white'>Prescription<span>",
            handler: 'onDoctorPrescription',
            style: {
                'background': 'transparent',
                border: 0,
                'margin-top': '20px'
            }
        },
        ]

    }
});