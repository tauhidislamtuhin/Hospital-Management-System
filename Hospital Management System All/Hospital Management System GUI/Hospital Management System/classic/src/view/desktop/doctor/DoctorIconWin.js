Ext.define('HMS.view.desktop.doctor.DoctorIconWin', {
    extend: 'Ext.window.Window',
    xtype: 'doctorIconWin',
    
    controller: 'doctorController',

    height: 500,
    width: 600,
    title: 'Doctor',
    scrollable: true,
    // bodyPadding: 10,
    constrain: true,
    closable: true,
    minimizable: true,
    maximizable: true,


    items: [{
        xtype: 'rTabViewP'
    }],



    listeners: {
        minimize:function(){
            Ext.getCmp('doctorIcon-win').hide();
        },
        close: function(){
            Ext.getCmp('doctorBtn').destroy();
        }
    }
});