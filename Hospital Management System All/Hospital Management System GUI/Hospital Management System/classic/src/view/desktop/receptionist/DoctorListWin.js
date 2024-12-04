Ext.define('HMS.view.desktop.receptionist.DoctorListWin', {
    extend: 'Ext.window.Window',
    xtype: 'doctorlistRecep',
    id: 'doctorList_recep',

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
        xtype: 'doctorlist'
    }],





    listeners: {
        minimize: function(){
            Ext.getCmp('doctorList_recep').hide();
        },
        close: function(){
            Ext.getCmp('docWinRecep').destroy()
        }
    }
});