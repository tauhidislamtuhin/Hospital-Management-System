/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('HMS.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'HMS',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    // for tree
    // formulas: {
    //     selectionText: function (get) {
    //         var selection = get('treelist.items'),
    //             path;

    //         if (selection) {
    //             path = selection.getPath('text');
    //             path = path.replace(/^\/Root/, '');

    //             return 'Selected: ' + path;
    //         }
    //         else {
    //             return 'No node selected';
    //         }
    //     }
    // },

    stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [{
                    text: 'Dashboard',
                    iconCls: 'x-fa fa-home',
                    expanded: false
                }, {
                    text: 'Patient',
                    iconCls: 'x-fa fa-user',
                    children: [{
                        text: 'Patient List',
                        iconCls: 'x-fa fa-database',
                        leaf: true
                    }, {
                        text: 'Add Patient',
                        iconCls: 'x-fa fa-trash-alt',
                        items: [{
                            xtype: 'form-grid',
                        }],
                        leaf: true
                    }]
                }, {
                    text: 'Groups',
                    iconCls: 'x-fa fa-users',
                    leaf: true
                }, {
                    text: 'Settings',
                    iconCls: 'x-fa fa-wrench',
                    children: [{
                        text: 'Sharing',
                        iconCls: 'x-fa fa-share-alt',
                        leaf: true
                    }, {
                        text: 'Notifications',
                        iconCls: 'x-fa fa-flag',
                        leaf: true
                    }, {
                        text: 'Network',
                        iconCls: 'x-fa fa-signal',
                        leaf: true
                    }]
                }]
            }
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
