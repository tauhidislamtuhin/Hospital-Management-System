Ext.define('HMS.view.desktop.window.DTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'dTab',

    controller: 'doctorController',

    width: 1335,
    minWidth: 500,
    height: 900,

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
       
    //     closable: false,
    //     // disabled: true,
    //     // id: 'home',
    //     xtype: 'doctorlist'
    // }],

    lbar: {
        // dock: 'left',
        // xtype: 'toolbar',
        id: 'tabBtnD',
        items: [
        {
            text: 'Doctor Prescription',
            iconCls: 'fa fa-plus',
            listeners: {
                click: 'onPrescription'
            }
        },{
            text: 'Doctor List',
            listeners: {
                click: 'onDoctorList'
            }
        }
    
    ]
    }

});
