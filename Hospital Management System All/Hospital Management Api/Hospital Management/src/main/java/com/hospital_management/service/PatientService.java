package com.hospital_management.service;

import com.hospital_management.model.Patient;
import com.hospital_management.model.PatientDTO;
import com.hospital_management.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    public List<PatientDTO> executePatientListProcedure() {
        return patientRepository.callActionProcedure();
    }

    public Patient create(Patient patient){
        return patientRepository.save(patient);
    }
    public List<Patient> readAll(){
        return patientRepository.findAll();
    }
    public Patient read(int id){
        return patientRepository.findById(id).orElse(null);
    }
    public Patient update(Patient addPatient){
        Patient patient = patientRepository.findById(addPatient.getPatient_serial_no()).orElse(null);
        patient.setTx_patient_name(addPatient.getTx_patient_name());
        patient.setPatient_age(addPatient.getPatient_age());
        patient.setTx_patient_gender(addPatient.getTx_patient_gender());
        patient.setDepartment_id(addPatient.getDepartment_id());
        patient.setDoctor_id(addPatient.getDoctor_id());
        patient.setTx_patient_problem(addPatient.getTx_patient_problem());
        patient.setTx_patient_address(addPatient.getTx_patient_address());
        patient.setTx_patient_Phone(addPatient.getTx_patient_Phone());
        patient.setDt_visit_date(addPatient.getDt_visit_date());
        return patientRepository.save(addPatient);
    }

    public String delete(int id){
        patientRepository.deleteById(id);
        return "Successfully Deleted";
    }

}
