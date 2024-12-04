Ext.define('M.view.desktop.window.DoctorController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.doctorController',
    onMinimize: function () {
        Ext.getCmp('doctor-win').hide();
    },
    onClose: function () {
        Ext.getCmp('doctorBtn').destroy();
    },
    tabGenertorD: function (title, xtype) {
        var tabPanelD = this.getView();
        var existingTabD = Ext.getCmp(xtype + '_tab');
        if (!existingTabD) {
            tabD = tabPanelD.add({
                title: title,
                xtype: xtype,
                id: xtype + '_tab'
            });
            tabPanelD.setActiveTab(tabD)
        } else {
            tabPanelD.setActiveTab(existingTabD);
        }
    },
    onAddDoctor: function () {

        this.tabGenertorD('Add Doctor', 'doctor-form')
    },

    onPrescription: function () {
        this.tabGenertorD('Doctor Prescription', 'report');
    },
    onDoctorList: function () {
        this.tabGenertorD('Doctor List', 'doctorlist');
    },

    onSrchTextForDoctor: function (textfield) {
        var grid = textfield.up('gridpanel');
        var store = grid.getStore();
        var searchText = textfield.getValue();

        store.clearFilter();

        if (searchText) {
            store.filterBy(function (record) {
                // Customize this condition to match your filter criteria.
                return (
                    record.get('tx_doctor_name').toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
                    record.get('doctor_id').toString() === searchText
                );
            });
        }
    },

    onSearchDoctorByNameOrID: function (button) {
        var textfield = button.up('toolbar').down('[reference=srchTextForDoctor]');
        this.onSrchTextForDoctor(textfield);
    },



    // Inside your 'paitentController'
    onRefreshForDoctor: function (button) {
        var grid = button.up('gridpanel');
        var textfield = grid.down('[reference=srchTextForDoctor]');
        var store = grid.getStore();

        // Clear the search field
        textfield.setValue('');

        // Clear the store's filters
        store.clearFilter();

        // Reload the store to refresh the grid
        store.loadPage(1); // You may need to customize this based on your pagination requirements
    },

    onRemoveClickDoctor: function (sender, record) {
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

    onDownloadCSVClickForDoctor: function (button) {
        var grid = button.up('gridpanel');
        var store = grid.getStore();

        // Create a 2D array to hold the data
        var data = [['Id', 'Name', 'Gender', 'Degree', 'Schedule', 'Phone', 'Fee', 'Photo']];

        store.each(function (record) {
            data.push([
                record.get('doctor_id'),
                record.get('tx_doctor_name'),
                record.get('tx_doctor_gender'),
                record.get('tx_doctor_degree'),
                record.get('tx_doctor_schedule'),
                record.get('tx_doctor_phone_no'),
                record.get('doctor_fee_bdt'),
                record.get('doctor_photo'),
            ]);
        });

        // Create a CSV string
        var csv = data.map(row => row.join(',')).join('\n');

        // Create a Blob containing the CSV data
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

        // Create a temporary link element to trigger the download
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'DoctorData.csv';

        // Trigger the download
        link.click();
    },


    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveDoctor');
        if (record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    },

});