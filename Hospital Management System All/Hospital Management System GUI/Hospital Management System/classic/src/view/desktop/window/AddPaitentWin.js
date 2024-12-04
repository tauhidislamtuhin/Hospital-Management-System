Ext.define('HMS.view.desktop.window.AddPaitentWin', {
    extend: 'Ext.window.Window',
    xtype: 'addPaitentWin',
    id: 'addPaitent-win',
    controller: 'paitentController',

    height: 500,
    width: 400,
    title: 'Add Paitent',
    scrollable: true,
    // bodyPadding: 10,
    constrain: true,
    closable: true,
    minimizable: true,
    maximizable: true,






    listeners: {
        minimize: 'onMinimize',
        close: 'onClose'
    }
});