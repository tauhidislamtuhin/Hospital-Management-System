Ext.define('HMS.store.ChartStore', {
    extend: 'Ext.data.Store',
    alias: 'store.chartStore',

    // Define the store's fields to match your JSON data structure
    fields: [
        'specialty',
        'earnings',
        'expenses',
        'profitPercentage'
    ],

    // Configure the proxy to load data from your JSON file
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'resources/hospitalData.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
