Ext.define('HMS.view.desktop.doctor.ReportWin', {
    extend: 'Ext.window.Window',
    xtype: 'reportIconWin',
    
    controller: 'doctorController',


    height: 500,
    width: 600,
    title: 'Prescription',
    scrollable: true,
    layout:'fit',
    bodyPadding: 10,
    constrain: true,
    closable: true,
    minimizable: true,
    maximizable: true,


    items: [{
        xtype: 'report'
    }],



    listeners: {
        minimize:function(){
            Ext.getCmp('reportIcon-Win').hide();
        },
        close: function(){
            Ext.getCmp('reportBtn').destroy();
        }
    }
});