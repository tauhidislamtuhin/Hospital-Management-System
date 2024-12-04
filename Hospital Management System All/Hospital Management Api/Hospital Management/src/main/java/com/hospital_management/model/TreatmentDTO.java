package com.hospital_management.model;

public interface TreatmentDTO {

     int getTreatment_id();
     int getPatient_serial_no();
     String getTx_patient_name();
     int getPatient_age();
     String getTx_doctor_name();
     String getTx_medicine_names();
     String getTx_test_names();
     int getTreatment_fee();
}
