Ext.define('M.view.desktop.window.AdmissionController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.admissionController',

    addAdmission: function () {
        var patient_doc = Ext.getCmp('patient_documents').value;
        patient_doc = patient_doc.replace(/C:\\fakepath\\/i, '');
        console.log(patient_doc);
        var dt = Ext.getCmp('admission_date').getValue();

        // "patient_serial_no":100001,
        // "admission_date":"2023-05-10",
        // "department_id":200002,
        // "doctor_id":300001,
        // "patient_documents":"null"

        var dataToSend = {
            patient_serial_no: Ext.getCmp('patient_serial_no').value,
            admission_date: Ext.Date.format(dt, 'd-m-y'),
            department_id: Ext.getCmp('department_id').value,
            doctor_id: Ext.getCmp('doctor_id1').value,
            patient_documents: patient_doc


        };


        Ext.Ajax.request({
            url: 'http://localhost:8080/create-admission',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            params: Ext.JSON.encode(dataToSend),
            success: function (response) {
                Ext.Msg.alert('Success', 'Admission Successful.');
                var grid = Ext.getCmp('admissionMainstore');
                grid.getStore().reload();
                // Close the window if needed

            },
            failure: function (response) {
                Ext.Msg.alert('Error', 'Cannot add data.');
            }
        });


    },
    updateAdmission: function () {
        var patient_doc = Ext.getCmp('patient_documents').value;
        patient_doc = patient_doc.replace(/C:\\fakepath\\/i, '');
        console.log(patient_doc);
        var dt = Ext.getCmp('admission_date').getValue();


        // "patient_serial_no":100001,
        // "admission_date":"2023-05-10",
        // "department_id":200002,
        // "doctor_id":300001,
        // "patient_documents":"null"



        var data = {
            admission_id: Ext.getCmp('adid').value,
            patient_serial_no: Ext.getCmp('patient_serial_noId').value,
            admission_date: Ext.Date.format(dt, 'd-m-y'),
            department_id: Ext.getCmp('department_id').value,
            doctor_id: Ext.getCmp('doctor_id').value,
            patient_documents: patient_doc


        };
        Ext.Ajax.request({
            url: 'http://localhost:8080/admission-update',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            params: Ext.JSON.encode(data),
            success: function (response) {
                Ext.Msg.alert('Update Success', 'Updated data.');

                // Reload the grid store to reflect the updated data


                // grid.getStore().reload();
                var grid = Ext.getCmp("addpgrid");
                // grid.getStore().reload();

                var window = Ext.getCmp('admissionWindowId');
                if (window) {
                    window.destroy()
                }
            },
            failure: function (response) {
                Ext.Msg.alert('Error', 'Cannot update data.');
            }
        });
    },
    removeAdmission: function () {
        var id = Ext.getCmp('adid').getValue(); // Use getValue() to get the field value

        Ext.Ajax.request({
            url: 'http://localhost:8080/delete-admission/' + id,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (response) {
                Ext.Msg.alert('Delete Success', 'Deleted data.');

                // Reload the grid store to reflect the updated data
                var grid = Ext.getCmp('addpgrid');
                // grid.getStore().reload();
                // console.log(grid)

                // Close the window if needed
                var window = Ext.getCmp('admissionWindowId');
                if (window) {
                    window.destroy()
                }
            },
            failure: function (response) {
                Ext.Msg.alert('Error', 'Cannot delete data.');
            }
        });
    }


});