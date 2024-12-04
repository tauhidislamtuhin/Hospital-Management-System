Ext.define('HMS.view.desktop.receptionist.ReceptionWinAdd', {
    extend: 'Ext.window.Window',
    xtype: 'receptionWin',
    id: 'reception-win',
    controller: 'statusController',

    height: 500,
    width: 600,
    title: 'Add Patient',
    scrollable: true,
    // bodyPadding: 10,
    constrain: true,
    closable: true,
    minimizable: true,
    maximizable: true,



    items: [{
        xtype: 'rTab'
    }],





    listeners: {
        minimize: function(){
            Ext.getCmp('reception-win').hide();
        },
        close: function(){
            Ext.getCmp('statusBtn').destroy()
        }
    }
});