Ext.define('HMS.view.desktop.receptionist.RecepWinViewP', {
    extend: 'Ext.window.Window',
    xtype: 'receptionViewP',
    id: 'reception-ViewP',
    controller: 'statusController',

    height: 500,
    width: 600,
    title: 'View Patient',
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
        minimize: function(){
            Ext.getCmp('reception-ViewP').hide();
        },
        close: function(){
            Ext.getCmp('recepPatientWin').destroy()
        }
    }
});