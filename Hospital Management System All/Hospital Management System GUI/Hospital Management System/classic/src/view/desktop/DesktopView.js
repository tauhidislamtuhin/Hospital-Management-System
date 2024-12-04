Ext.define('HMS.view.desktop.Desktop', {
    extend: 'Ext.panel.Panel',
    xtype: 'desktop-view',
    id: 'DV',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'HMS.view.main.MainController',
        // 'HMS.view.main.MainModel',
    ],

    controller: 'main',
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

        }, {
            xtype: 'tbseparator',
            id: 'tabSpit1'
        }, {
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
            html: "<img src='resources/images/p.png'><br><span style='color:white'>Patient<span>",
            handler: 'onStatus',
            style: {
                'background': 'transparent',
                border: 0
            }
        }, {
            xtype: 'button',
            html: "<img src='resources/images/dc.png'><br><span style='color:white'>Doctor<span>",
            handler: 'onDoctor',
            style: {
                'background': 'transparent',
                border: 0,
                'margin-top': '20px'
            }
        },
        {
            xtype: 'button',
            html: "<img src='resources/images/a.png'><br><span style='color:white'>Admin<span>",
            handler: 'onEdit',
            style: {
                'background': 'transparent',
                border: 0,
                'margin-top': '20px'
            }
        },
        ]

    }
});