Ext.define('HMS.view.desktop.window.PagingD', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.studentviewmodel',
    stores: {
        StudentListStore: {
            model: 'HMS.model.Personnel',
            autoLoad: true,
            autoSync: true,
            proxy:
            {
                type: 'ajax',
                reader:
                {
                    rootProperty: 'data',
                    type: 'json'
                },
                url: 'resources/paitent.json',
                writer: {
                    type: 'json',
                    dateFormat: 'd/m/Y',
                    writeAllFields: true
                }
            }
        },
        StudentListPagingStore: {
            model: 'HMS.model.Personnel',
            autoLoad: true,
            pageSize: 5,
            proxy:
            {
                type: 'ajax',
                reader:
                {
                    rootProperty: 'data',
                    type: 'json',
                    totalProperty: 'Total'
                },
                url: 'resources/paitent.json'
            }
        }

    }
});