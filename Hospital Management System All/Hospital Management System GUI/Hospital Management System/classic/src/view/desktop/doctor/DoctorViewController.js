Ext.define('HMS.view.desktop.doctor.DoctorViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.doctorViewController',
    windowGenerator: function (title, xtype, windowId, toolBtnId) {
        var win = Ext.getCmp(windowId);
        var toolbar = Ext.getCmp('btnContainer');
        var toolBtn;
        if (!win) {
            win = Ext.create({
                xtype: xtype,
                title: title,
                id: windowId // Set the id property to the provided windowId
            });

            toolBtn = Ext.create({
                xtype: 'button',
                style: {
                    'margin-left': '5px',
                },
                text: title, // Use the provided title for the button text
                id: toolBtnId, // Set the id property to the provided toolBtnId
                handler: function () {
                    win.show();
                }
            });
            toolbar.add(toolBtn);
        }
            win.show(); // Always show the window, even if it already exists.
        

       
    },
    onLogout: function () {
        window.location.reload();
    },

    // **** onPatient ******
    onDoctorIcon: function () {
        this.windowGenerator('Doctor', 'doctorIconWin', 'doctorIcon-win', 'doctorBtn');
    },
    onDoctorPrescription: function () {
        this.windowGenerator('Prescription', 'reportIconWin', 'reportIcon-Win', 'reportBtn');
    },
    // for time show and notification-bar
    onWpRender: function () {
        clock = this.lookupReference('clock'),
            // Kick off the clock timer that updates the clock el every second:
            Ext.TaskManager.start({
                run: function () {
                    // If it gets destroyed, we stop the task
                    if (clock.destroyed) {
                        return false;
                    }

                    Ext.fly(clock.getEl()).update(Ext.Date.format(new Date(), 'g:i:s A'));
                },
                interval: 1000
            });
        Ext.onReady(function () {
            Ext.get('clock').setStyle('color', 'white');
            // Ext.get('clock').setStyle('left', '1200px');
            // Ext.get('nBtn').setStyle('left', '1290px')
        });

    },
    afterRender: function () {
        var tips = [{
            target: this.lookup('rich').el,
            anchor: 'top',
            html: '<ul style="margin-bottom: 15px;">' +
                '<li>XYZ Hospital</li>' +
                '<li>Banani,Dhaka</li>' +
                '<li>Largest hospital in Banani</li>' +
                '</ul>' +
                '<img style="width: 400px; height: 225px;" src="resources/images/bg2.jpg" />',
            width: 415,
            autoHide: false,
            closable: true
        }];

        this.tips = Ext.Array.map(tips, function (cfg) {
            cfg.showOnTap = true;

            return new Ext.tip.ToolTip(cfg);
        });
    },

    destroy: function () {
        this.tips = Ext.destroy(this.tips);
        this.callParent();
    },

});