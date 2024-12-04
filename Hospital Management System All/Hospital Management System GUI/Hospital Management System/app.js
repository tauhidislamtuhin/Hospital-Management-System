/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'HMS.Application',

    name: 'HMS',

    requires: [
        // This will automatically load all classes in the HMS namespace
        // so that application classes do not need to require each other.
        'HMS.*'
    ],

    // The name of the initial view to create.
    // mainView: 'HMS.view.desktop.Desktop'
    mainView: 'HMS.view.logView.LoginPanel'
    // mainView: 'HMS.view.desktop.doctor.DoctorView'
});
