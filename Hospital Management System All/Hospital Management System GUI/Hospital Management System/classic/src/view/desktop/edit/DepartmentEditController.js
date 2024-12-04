Ext.define('HMS.view.desktop.edit.DepartmentEditController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.departmentEditController',

    removeteachwindow: function () {
        var id = Ext.getCmp('department_id').getValue(); // Use getValue() to get the field value

        Ext.Ajax.request({
            url: 'http://localhost:8080/delete-dept/' + id,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (response) {
                Ext.Msg.alert('Delete Success', 'Deleted data.');
                
                

                // Reload the grid store to reflect the updated data
                var grid = Ext.getCmp('deplist');
                grid.getStore().reload();

                // Close the window if needed
                var dep_window = Ext.getCmp('_window');
                if (dep_window) {
                    dep_window.destroy()
                }
            },
            failure: function (response) {
                Ext.Msg.alert('Error', 'Cannot delete data.');
            }
        });
    },
    updateteacherhandler: function () {

        var department_id = Ext.getCmp('id_department').getValue(); // Use getValue() to get the field value
        var tx_department_name1 = Ext.getCmp('name_department').getValue(); // Use getValue() to get the field value


        // var id = Ext.getCmp('id').getValue(); // Use getValue() to get the field value
        // var fname = Ext.getCmp('fname').getValue(); // Use getValue() to get the field value
        // var lname = Ext.getCmp('lname').getValue(); // Use getValue() to get the field value
        // var email = Ext.getCmp('email').getValue(); // Use getValue() to get the field value
        // var date = Ext.getCmp('date').getValue(); // Use getValue() to get the field value
        // var address = Ext.getCmp('address').getValue(); // Use getValue() to get the field value
        var data = {
            department_id: department_id,
            tx_department_name: tx_department_name1
    };
    Ext.Ajax.request({
        url: 'http://localhost:8080/dept-update',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        params: Ext.JSON.encode(data),
        success: function (response) {
            Ext.Msg.alert('Update Success', 'Updated data.');
            

            // Reload the grid store to reflect the updated data
            var grid = Ext.getCmp('deplist');
            grid.getStore().reload();

            // Close the window if needed
            var dep_window = Ext.getCmp('_window');
            if (dep_window) {
                dep_window.destroy()
            }
        },
        failure: function (response) {
            Ext.Msg.alert('Error', 'Cannot update data.');
        }
    });
},
addDoctorButton: function () {
    var dataToSend = {
        tx_department_name : Ext.getCmp('tx_department_name').value,


        };

        Ext.Ajax.request({
            url: 'http://localhost:8080/create-dept', // Replace with your Spring Boot endpoint URL
            method: 'POST',
            jsonData: dataToSend,

            success: function (response) {
                // Handle success response from the server
                var responseData = Ext.decode(response.responseText);
                Ext.Msg.alert('Department  Added', 'Department Added Successfully');
                console.log('Response:', responseData);
            },

            failure: function (response) {
                // Handle failure or error response from the server
                Ext.Msg.alert('Department Not Added', 'Department Not Added Successfully');
                console.error('Request failed:', response);
            }
        });}

});
