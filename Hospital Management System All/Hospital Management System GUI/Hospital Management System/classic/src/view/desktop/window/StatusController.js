Ext.define('M.view.desktop.window.StatusController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.statusController',
    onMinimize: function () { 
        Ext.getCmp('paitent-win').hide();
    },
    onClose: function () {
        Ext.getCmp('statusBtn').destroy();
    }
});