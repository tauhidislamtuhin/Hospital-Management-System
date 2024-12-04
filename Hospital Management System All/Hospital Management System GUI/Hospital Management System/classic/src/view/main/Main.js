/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('HMS.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'tree-list',
    width: 500,
    height: 450,
    title: 'TreeList',
    // controller: 'main',

    iconCls: 'x-fa fa-cogs',
    layout: 'border',

    viewModel: {
        type: 'main'
    },

    items: [{
        title: 'home',
        items: [{
            xtype: 'mainlist'
        }]
    }]
});