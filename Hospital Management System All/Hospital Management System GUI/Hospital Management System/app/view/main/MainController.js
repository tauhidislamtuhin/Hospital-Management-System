/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('HMS.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
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
                '<li>5 bedrooms</li>' +
                '<li>Close to transport</li>' +
                '<li>Large backyard</li>' +
                '</ul>' +
                '<img style="width: 300px; height: 225px;" src="resources/images/13.jpg" />',
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

    onStatus: function () {
        var toolbar = Ext.getCmp('btnContainer');
        var paitentWin = Ext.getCmp('paitent-win');
        var toolBtn;
        if (!paitentWin) {
            paitentWin = Ext.create({
                layout: 'fit',
                xtype: "paitentWin",
            });
            toolBtn = Ext.create({
                xtype: 'button',
                style: {
                    'margin-left': '5px',
                },
                text: paitentWin.title,
                id: 'statusBtn',
                handler: function () {
                    paitentWin.show();
                }
            });
            toolbar.add(toolBtn);
            paitentWin.show();
        } else {
            paitentWin.show();
        }
    },
    onDoctor: function () {
        var toolbar = Ext.getCmp('btnContainer');
        var doctorWin = Ext.getCmp('doctor-win');
        var toolBtnD;
        if (!doctorWin) {
            doctorWin = Ext.create({
                layout: 'fit',
                xtype: "doctorWin",
            });
            toolBtnD = Ext.create({
                xtype: 'button',
                style: {
                    'margin-left': '5px',
                },
                text: doctorWin.title,
                id: 'doctorBtn',
                handler: function () {
                    doctorWin.show();
                }
            });
            toolbar.add(toolBtnD);
            doctorWin.show();
        } else {
            doctorWin.show();
        }
    },
    onEdit: function () {
        var toolbar = Ext.getCmp('btnContainer');
        var paitentWin = Ext.getCmp('edit-win');
        var toolBtn;
        if (!paitentWin) {
            paitentWin = Ext.create({
                layout: 'fit',
                xtype: "editWindow",
            });
            toolBtn = Ext.create({
                xtype: 'button',
                style: {
                    'margin-left': '5px',
                },
                text: 'Admin',
                id: 'edtBtn',
                handler: function () {
                    paitentWin.show();
                }
            });
            toolbar.add(toolBtn);
            paitentWin.show();
        } else {
            paitentWin.show();
        }
    },

    onLogout: function () {
        window.location.reload();
    },
    // onEditCompanyClick: function (button) {
    //     this.createDialog(button.getWidgetRecord());
    // },
    onRecepAddP:function () {
        var toolbar = Ext.getCmp('btnContainer');
        var paitentWin = Ext.getCmp('reception-win');
        var toolBtn;
        if (!paitentWin) {
            paitentWin = Ext.create({
                layout: 'fit',
                xtype: "receptionWin",
            });
            toolBtn = Ext.create({
                xtype: 'button',
                style: {
                    'margin-left': '5px',
                },
                text: paitentWin.title,
                id: 'statusBtn',
                handler: function () {
                    paitentWin.show();
                }
            });
            toolbar.add(toolBtn);
            paitentWin.show();
        } else {
            paitentWin.show();
        }
    },
    onRecepViewP:function () {
        var toolbar = Ext.getCmp('btnContainer');
        var paitentWin = Ext.getCmp('reception-ViewP');
        var toolBtn;
        if (!paitentWin) {
            paitentWin = Ext.create({
                layout: 'fit',
                xtype: "receptionViewP",
            });
            toolBtn = Ext.create({
                xtype: 'button',
                style: {
                    'margin-left': '5px',
                },
                text: paitentWin.title,
                id: 'recepPatientWin',
                handler: function () {
                    paitentWin.show();
                }
            });
            toolbar.add(toolBtn);
            paitentWin.show();
        } else {
            paitentWin.show();
        }
    },
    onDoctorRecep:function () {
        var toolbar = Ext.getCmp('btnContainer');
        var paitentWin = Ext.getCmp('doctorList_recep');
        var toolBtn;
        if (!paitentWin) {
            paitentWin = Ext.create({
                layout: 'fit',
                xtype: "doctorlistRecep",
            });
            toolBtn = Ext.create({
                xtype: 'button',
                style: {
                    'margin-left': '5px',
                },
                text: paitentWin.title,
                id: 'docWinRecep',
                handler: function () {
                    paitentWin.show();
                }
            });
            toolbar.add(toolBtn);
            paitentWin.show();
        } else {
            paitentWin.show();
        }
    },

});
