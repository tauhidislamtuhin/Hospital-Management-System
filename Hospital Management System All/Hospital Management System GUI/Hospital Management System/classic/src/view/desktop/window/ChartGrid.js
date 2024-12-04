Ext.define('HMS.view.desktop.window.ChartGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.hospitalgrid', // Alias to refer to this component in your application

    requires: [
        'HMS.store.ChartStore'
    ],

    title: 'Grid Data',

    store: {
        type: 'chartStore'
    },

    columns: [
        { text: 'Specialty', dataIndex: 'specialty', flex: 1 },
        { text: 'Earnings', dataIndex: 'earnings', flex: 1 },
        { text: 'Expenses', dataIndex: 'expenses', flex: 1 },
        { text: 'ProfitPercentage', dataIndex: 'profitPercentage', flex: 1 }
    ],


});
