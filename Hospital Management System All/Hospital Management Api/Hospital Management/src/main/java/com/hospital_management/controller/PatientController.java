package com.hospital_management.controller;

import com.hospital_management.model.Patient;
import com.hospital_management.model.PatientDTO;
import com.hospital_management.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:1841")
public class PatientController {

    @Autowired
    private PatientService patientService;
    // For Store procedure query
    @GetMapping("/patient-list")
    public List<PatientDTO> getPatientList() {
        return patientService.executePatientListProcedure();
    }


    @PostMapping("/create-patient")
    public Patient create(@RequestBody Patient patient) {
        return patientService.create(patient);

    }
    @GetMapping("/read-patient-all")
    public List<Patient> readAllPatient() {
        return patientService.readAll();
    }

    @GetMapping("/read-patient/{id}")
    public Patient read(@PathVariable int id) {
        return patientService.read(id);
    }

    @PutMapping("/patient-update")
    public Patient update(@RequestBody Patient patient) {
        return patientService.update(patient);
    }

    @DeleteMapping("/delete-patient/{id}")
    public String Delete(@PathVariable int id) {
        return patientService.delete(id);
    }


}
