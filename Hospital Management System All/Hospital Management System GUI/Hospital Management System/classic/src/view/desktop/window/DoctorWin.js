Ext.define('HMS.view.desktop.window.DoctorWin', {
    extend: 'Ext.window.Window',
    xtype: 'doctorWin',
    id: 'doctor-win',
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
        xtype: 'dTab'
    }],



    listeners: {
        minimize: 'onMinimize',
        close: 'onClose'
    }
});