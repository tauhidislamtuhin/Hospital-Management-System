Ext.define('M.view.desktop.window.AddPatientController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.addPatientController',
  patientSave: function () {
    var patientGender = Ext.getCmp('genderid')
    var patientGenderValue = patientGender.getValue()

    var paymentOption = Ext.getCmp('payment_option')
    var paymentOptionValue = paymentOption.getValue()
    //var dt = Ext.getCmp('visit_date').value;

    // console.log(patientGenderValue);
    // console.log(paymentOptionValue);

    var dn = Ext.getCmp('tx_department_name').value;
    console.log(dn)
    var dt = Ext.getCmp('dt_visit_date').getValue();
    console.log(dt)
 
    var dataToSend = {
      tx_patient_name: Ext.getCmp('tx_patient_name').value,
      patient_age: Ext.getCmp('patient_age').value,
      tx_patient_gender: patientGenderValue,
      department_id: Ext.getCmp('tx_department_name').value,
      doctor_id: Ext.getCmp('doctor_id').value,
      tx_patient_problem: Ext.getCmp('tx_patient_problem').value,
      tx_patient_address: Ext.getCmp('tx_patient_address').value,
      tx_patient_Phone: Ext.getCmp('tx_patient_Phone').value,
      dt_visit_date: Ext.Date.format(dt, 'd-m-y'),
    };

    //   var dataToSend = {

    //     tx_patient_name: Ext.getCmp('patient_name').value,
    //     patient_age: Ext.getCmp('patient_age').value,
    //     tx_patient_gender: patientGenderValue,
    //     patient_phone: Ext.getCmp('patient_phone').value,
    //     //department_id: Ext.getCmp('department_id').value,
    //     tx_department_name: Ext.getCmp('tx_department_name').value,
    //     doctor_id: Ext.getCmp('doctor_id').value,
    //     tx_patient_problem: Ext.getCmp('tx_patient_problem').value,
    //     tx_patient_address: Ext.getCmp('tx_patient_address').value,
    //     dt_visit_date:Ext.getCmp('visit_date').value,
    //   }


    //console.log(dataToSend)

    Ext.Ajax.request({
      url: 'http://localhost:8080/create-patient', // Replace with your Spring Boot endpoint URL
      method: 'POST',
      jsonData: dataToSend,

      success: function (response) {
        // Handle success response from the server
        var responseData = Ext.decode(response.responseText);
        Ext.Msg.alert('Add Patient Success', 'Added Patient');
        console.log('Response:', responseData);
      },

      failure: function (response) {
        // Handle failure or error response from the server
        Ext.Msg.alert('Add Patient Failure', 'Failure Patient');
        console.error('Request failed:', response);
      }
    });

  },
  updatePaitenthandler: function () {
    var patientGender = Ext.getCmp('tx_patient_gender')
    var patientGenderValue = patientGender.getValue()

    //var paymentOption = Ext.getCmp('payment_option')
   // var paymentOptionValue = paymentOption.getValue()
    //var dt = Ext.getCmp('visit_date').value;

    // console.log(patientGenderValue);
    // console.log(paymentOptionValue);

    // var dn = Ext.getCmp('tx_department_name').value;
    // console.log(dn)
    var dt = Ext.getCmp('dt_visit_date').getValue();
    console.log(dt)
 
    var data = {
      patient_serial_no: Ext.getCmp('pid').value,
      tx_patient_name: Ext.getCmp('patient_nameId').value,
      patient_age: Ext.getCmp('patient_ageId').value,
      tx_patient_gender: patientGenderValue,
      department_id: Ext.getCmp('department_id').value,
      doctor_id: Ext.getCmp('doctor_id').value,
      tx_patient_problem: Ext.getCmp('tx_patient_problem').value,
      tx_patient_address: Ext.getCmp('tx_patient_address').value,
      tx_patient_Phone: Ext.getCmp('tx_patient_Phone').value,
      dt_visit_date: Ext.Date.format(dt, 'd-m-y'),
    };
    Ext.Ajax.request({
      url: 'http://localhost:8080/patient-update',
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      params: Ext.JSON.encode(data),
      success: function (response) {
          Ext.Msg.alert('Update Success', 'Updated data.');

          // Reload the grid store to reflect the updated data
          var grid = Ext.getCmp('patientGridList');
          // grid.getStore().reload();

         // Close the window if needed
         var dep_window = Ext.getCmp('editPatientId');
         if (dep_window) {
             dep_window.destroy()
         }
      },
      failure: function (response) {
          Ext.Msg.alert('Error', 'Cannot update data.');
      }
  });


  },

  removePaitenthandler: function () {
    var id = Ext.getCmp('patient_serial_no').getValue(); // Use getValue() to get the field value

    Ext.Ajax.request({
        url: 'http://localhost:8080/delete-patient/' + id,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        success: function (response) {
            Ext.Msg.alert('Delete Success', 'Deleted data.');
            
            // Reload the grid store to reflect the updated data
            var grid = Ext.getCmp('paging');
            grid.getStore().reload();
            
            // Close the window if needed
            var editWin = Ext.getCmp('edit_win');
            if (editWin) {
                editWin.close();
            }
        },
        failure: function (response) {
            Ext.Msg.alert('Error', 'Cannot delete data.');
        }
    });
},

});