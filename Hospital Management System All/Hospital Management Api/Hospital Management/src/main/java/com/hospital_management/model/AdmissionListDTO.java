package com.hospital_management.model;
public interface AdmissionListDTO {

  int getAdmission_id();
  int getPatient_serial_no();
  String getTx_patient_name();
  int getPatient_age();
  String getTx_patient_gender();
  String getTx_department_name();
  String getTx_doctor_name();
  String getDt_visit_date();
}
