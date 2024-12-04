Ext.define('HMS.view.desktop.receptionist.RecepDTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'RDTab',
    id: 'RDTab',

    controller: 'doctorController',

    width: 1335,
    height: 800,

    defaults: {
        bodyPadding: 10,
        scrollable: true,
        closable: true
    },
    tabPosition: 'top',
    tabRotation: 0,
    tabBar: {
        // turn off borders for classic theme.  neptune and crisp don't need this
        // because they are borderless by default
        border: false
    },

    // items: [{
    //     xtype: 'container',
    //     width: 150,
    //     closable: false
    // }],

    lbar: {
        // dock: 'left',
        // xtype: 'toolbar',
        id: 'RDtabBtn',
        items: [
        //     {
        //     text: 'Patient List',
        //     listeners: {
        //         click: 'onPaitent'
        //     }
        // },
         {
            text: 'Doctor List',
            iconCls: 'fa fa-plus',
            listeners: {
                click: 'onDoctorList'
            }
        },
        // {
        //     text: 'Admission Patient Edit',
        //     listeners: {
        //         click: 'onAddmissionEdit'
        //     }
        // },

        // {
        //     text: 'Admission Patient List',
        //     listeners: {
        //         click: 'onAddmissionList'
        //     }
        // }
    ]
    }

});