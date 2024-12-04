Ext.define('HMS.view.desktop.edit.EditTreatmentController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.editTreatmentController',

    removeteachwindow: function () {
        var id = Ext.getCmp('treatment_id').getValue(); // Use getValue() to get the field value

        Ext.Ajax.request({
            url: 'http://localhost:8080/delete-treatment/' + id,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (response) {
                Ext.Msg.alert('Delete Success', 'Deleted data.');

                // Reload the grid store to reflect the updated data
                var grid = Ext.getCmp('grid');
                // grid.getStore().reload();

                // Close the window if needed
                var window = Ext.getCmp('t_window');
                if (window) {
                    window.destroy()
                }
            },
            failure: function (response) {
                Ext.Msg.alert('Error', 'Cannot delete data.');
            }
        });
    },
    updateteacherhandler: function () {

        var treatment_id = Ext.getCmp('treatment_id').getValue(); // Use getValue() to get the field value
        var doctor_id = Ext.getCmp('doctor_id').getValue(); // Use getValue() to get the field value
        var patient_serial_no = Ext.getCmp('patient_serial_no').getValue();

        var tx_medicine_names = Ext.getCmp('tx_medicine_names').getValue();
        var tx_test_names = Ext.getCmp('tx_test_names').getValue();
        var treatment_fee = Ext.getCmp('treatment_fee').getValue();

        // var id = Ext.getCmp('id').getValue(); // Use getValue() to get the field value
        // var fname = Ext.getCmp('fname').getValue(); // Use getValue() to get the field value
        // var lname = Ext.getCmp('lname').getValue(); // Use getValue() to get the field value
        // var email = Ext.getCmp('email').getValue(); // Use getValue() to get the field value
        // var date = Ext.getCmp('date').getValue(); // Use getValue() to get the field value
        // var address = Ext.getCmp('address').getValue(); // Use getValue() to get the field value
        var data = {
            treatment_id: treatment_id,
            doctor_id: doctor_id,
            patient_serial_no: patient_serial_no,
            tx_medicine_names: tx_medicine_names,
            tx_test_names: tx_test_names,
            treatment_fee: treatment_fee
    };
    Ext.Ajax.request({
        url: 'http://localhost:8080/treatment-update',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        params: Ext.JSON.encode(data),
        success: function (response) {
            Ext.Msg.alert('Update Success', 'Updated data.');
            

            // Reload the grid store to reflect the updated data
            var grid = Ext.getCmp('treatmentMainstore');
            // grid.getStore().reload();

            // Close the window if needed
            var window = Ext.getCmp('t_window');
            if (window) {
                window.destroy()
            }
        },
        failure: function (response) {
            Ext.Msg.alert('Error', 'Cannot update data.');
        }
    });
}

});
