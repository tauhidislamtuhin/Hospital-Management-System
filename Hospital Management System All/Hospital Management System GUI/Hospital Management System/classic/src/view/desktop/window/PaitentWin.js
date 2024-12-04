Ext.define('HMS.view.desktop.window.PaitentWin', {
    extend: 'Ext.window.Window',
    xtype: 'paitentWin',
    id: 'paitent-win',
    controller: 'statusController',

    height: 500,
    width: 600,
    title: 'Patient',
    scrollable: true,
    // bodyPadding: 10,
    constrain: true,
    closable: true,
    minimizable: true,
    maximizable: true,



    items: [{
        xtype: 'pTab'
    }],





    listeners: {
        minimize: 'onMinimize',
        close: 'onClose'
    }
});