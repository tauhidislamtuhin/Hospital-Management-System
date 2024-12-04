Ext.define('HMS.view.desktop.edit.EditWindow', {
    extend: 'Ext.window.Window',
    xtype: 'editWindow',
    id: 'edit-win',
    controller: 'statusController',

    height: 500,
    width: 600,
    title: 'Admin',
    scrollable: true,
    // bodyPadding: 10,
    constrain: true,
    closable: true,
    minimizable: true,
    maximizable: true,


    items: [{
        xtype: 'navi-bar',


    }],



    listeners: {
        minimize:function(){
            Ext.getCmp('edit-win').hide();
        },
        close: function () {
            Ext.getCmp('edtBtn').destroy();
        }
    }
});