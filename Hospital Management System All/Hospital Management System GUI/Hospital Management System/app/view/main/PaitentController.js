Ext.define('HMS.view.main.PaitentController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.paitentController',


    onSrchText: function (textfield) {
        var grid = textfield.up('gridpanel');
        var store = grid.getStore();
        var searchText = textfield.getValue();

        store.clearFilter();

        if (searchText) {
            store.filterBy(function (record) {
                // Customize this condition to match your filter criteria.
                return (
                    record.get('tx_patient_name').toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
                    record.get('patient_serial_no').toString() === searchText
                );
            });
        }
    },

    onSearch: function (button) {
        var textfield = button.up('toolbar').down('[reference=srchText]');
        this.onSrchText(textfield);
    },



    // Inside your 'paitentController'
    onRefresh: function (button) {
        var grid = button.up('gridpanel');
        var textfield = grid.down('[reference=srchText]');
        var store = grid.getStore();

        // Clear the search field
        textfield.setValue('');

        // Clear the store's filters
        store.clearFilter();

        // Reload the store to refresh the grid
        store.loadPage(1); // You may need to customize this based on your pagination requirements
    },

    onRemoveClick: function (sender, record) {
        var studentGrid = this.getView();
        var studentStore = studentGrid.getStore();
        var selectedRows = studentGrid.getSelectionModel().getSelection();

        if (selectedRows.length === 0) {
            Ext.toast('No records selected for remove', '', 't');
            return;
        }

        studentStore.remove(selectedRows);

        Ext.toast(selectedRows.length + ' record(s) removed successfully', '', 't');

        // You can customize the toast message and other properties as needed.
    },

    onDownloadCSVClick: function (button) {
        var grid = button.up('gridpanel');
        var store = grid.getStore();

        // Create a 2D array to hold the data
        var data = [['Id', 'Name', 'Age', 'Gender', 'Department Id', 'Doctor Id', 'Problem', 'Address', 'Phone', 'Visit Date']];

        store.each(function (record) {
            data.push([
                record.get('patient_serial_no'),
                record.get('tx_patient_name'),
                record.get('patient_age'),
                record.get('tx_patient_gender'),
                record.get('department_id'),
                record.get('doctor_id'),
                record.get('tx_patient_problem'),
                record.get('tx_patient_address'),
                record.get('tx_patient_Phone'),
               record.get('dt_visit_date') // Format date as string
            ]);
        });

        // Create a CSV string
        var csv = data.map(row => row.join(',')).join('\n');
        console.log(data)

        // Create a Blob containing the CSV data
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

        // Create a temporary link element to trigger the download
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'PatientData.csv';

        // Trigger the download
        link.click();
    },


    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveStudent');
        if (record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    },

});
