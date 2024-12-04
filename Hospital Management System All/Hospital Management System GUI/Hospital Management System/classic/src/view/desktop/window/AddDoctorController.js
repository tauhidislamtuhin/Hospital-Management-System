Ext.define('HMS.view.desktop.window.AddDoctorController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.addDoctorController',

    removeDoctor: function () {
            var id = Ext.getCmp('docid').getValue(); // Use getValue() to get the field value

            Ext.Ajax.request({
                url: 'http://localhost:8080/delete-doct/' + id,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                success: function (response) {
                    Ext.Msg.alert('Delete Success', 'Deleted data.');

                    var window = Ext.getCmp('doctor_viewId');
                    if (window) {
                        window.destroy()
                    }

                    // Reload the grid store to reflect the updated data
                    var grid = Ext.getCmp('doct_list');
                    // grid.getStore().reload();

                    // Close the window if needed
                    // var editWin = Ext.getCmp('edit_win');
                    // if (editWin) {
                    //     editWin.close();
                    // }
                },
                failure: function (response) {
                    Ext.Msg.alert('Error', 'Cannot delete data.');
                }
            });
        },
    updateDoctor: function () {
        var doctor_p = Ext.getCmp('dPhoto').value;
        doctor_ph = doctor_p.replace(/C:\\fakepath\\/i, '');
        doctor_photo_path ="C:\\Tauhid\\hms\\resources\\"+doctor_ph
        
        var doctorGender = Ext.getCmp('dGender')
        var doctorGenderValue = doctorGender.getValue();
        
        var data= {
            doctor_id : Ext.getCmp('docid').value,
            department_id: Ext.getCmp('d_department_id').value,
            tx_doctor_name: Ext.getCmp('dName').value,
            tx_doctor_gender: doctorGenderValue,
            tx_doctor_degree: Ext.getCmp('dDegree').value,
            tx_doctor_schedule: Ext.getCmp('dSchedule').value,
            tx_doctor_phone_no: Ext.getCmp('dPhone').value,
            doctor_photo: doctor_ph,
            doctor_fee_bdt: Ext.getCmp('doctor_fee_bdt').value,
        };

        Ext.Ajax.request({
            url: 'http://localhost:8080/doct-update',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            params: Ext.JSON.encode(data),
            success: function (response) {
                
                Ext.Msg.alert('Update Success', 'Updated data.');
                // var doc_window = Ext.getCmp('doctor_view');
                // if (doc_window) {
                //     doc_window.destroy()
                // }

                // Reload the grid store to reflect the updated data
                var grid = Ext.getCmp('doct_list');
                // grid.getStore().reload();

                // Close the window if needed
                var window = Ext.getCmp('doctor_viewId');
                if (window) {
                    window.destroy()
                }
            },
            failure: function (response) {
                Ext.Msg.alert('Error', 'Cannot update data.');
            }
        });
    },


    //---------------------------------------------------
    //     var doctorGender = Ext.getCmp('gender')
    //     var doctorGenderValue = doctorGender.getValue()

    //    var department_id = Ext.getCmp('department_id').getValue();
    //    var tx_doctor_name = Ext.getCmp('tx_doctor_name').getValue();

    //    var tx_dotcor_degree = Ext.getCmp('tx_dotcor_degree').getValue();
    //    var tx_doctor_schedule = Ext.getCmp('tx_doctor_schedule').getValue();
    //    var tx_doctor_phone_no = Ext.getCmp('tx_doctor_phone_no').getValue();
    //    var doctor_fee_bdt = Ext.getCmp('doctor_fee_bdt').getValue();
    //    var doctor_photo = Ext.getCmp('doctor_photo').getValue();

    // var paymentOption = Ext.getCmp('payment_option')
    // var paymentOptionValue = paymentOption.getValue()
    // var dt = Ext.getCmp('visit_date').value;

    // var dataToSend = {
    //     department_id: department_id,
    //     tx_doctor_name: tx_doctor_name,
    //     tx_doctor_gender: doctorGenderValue,
    //     tx_dotcor_degree: tx_dotcor_degree,
    //     tx_doctor_schedule: tx_doctor_schedule,
    //     tx_doctor_phone_no: tx_doctor_phone_no,
    //     doctor_fee_bdt:doctor_fee_bdt,
    //     doctor_photo: doctor_photo,



    // };

    addDoctor: function () {

        var doctor_p = Ext.getCmp('doctor_photo').value;
        doctor_ph = doctor_p.replace(/C:\\fakepath\\/i, '');
        doctor_photo_path ="C:\\Tauhid\\hms\\resources\\"+doctor_ph
        
        var doctorGender = Ext.getCmp('gender')
        var doctorGenderValue = doctorGender.getValue();
        
        console.log(doctor_photo_path)



        var dataToSend = {
            department_id: Ext.getCmp('department_id').value,
            tx_doctor_name: Ext.getCmp('tx_doctor_name').value,
            tx_doctor_gender: doctorGenderValue,
            tx_doctor_degree: Ext.getCmp('tx_doctor_degree').value,
            tx_doctor_schedule: Ext.getCmp('tx_doctor_schedule').value,
            tx_doctor_phone_no: Ext.getCmp('tx_doctor_phone_no').value,
            doctor_photo: doctor_ph,
            doctor_fee_bdt: Ext.getCmp('doctor_fee_bdt').value,
        };



        Ext.Ajax.request({
            url: 'http://localhost:8080/create-doct', // Replace with your Spring Boot endpoint URL
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
        });


    }

});
