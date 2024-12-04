package com.hospital_management.model;

import jakarta.persistence.Id;


public interface PatientDTO {

     int getPatient_serial_no();
     String getTx_patient_name();
     int getPatient_age();
     String getTx_patient_gender();
     String getTx_patient_problem();
     String getTx_department_name();
     String getTx_doctor_name();
     String getDt_visit_date();
}
