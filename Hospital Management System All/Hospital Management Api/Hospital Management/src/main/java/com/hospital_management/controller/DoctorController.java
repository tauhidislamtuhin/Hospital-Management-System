package com.hospital_management.controller;

//import com.hospital_management.model.DoctorDetailDTO;
import com.hospital_management.model.Doctor;
import com.hospital_management.model.DoctorDTO;
import com.hospital_management.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:1841")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    // For Store procedure query
    @GetMapping("/doctor-list")
    public List<DoctorDTO> getDoctorList() {
        return doctorService.executeDoctorListProcedure();
    }


    @PostMapping("/create-doct")
    public Doctor create(@RequestBody Doctor doctor) {
        return doctorService.create(doctor);
    }
    @GetMapping("/read-doct-all")
    public List<Doctor> readAllDoctor() {
        return doctorService.readAll();
    }

    @GetMapping("/read-doct/{id}")
    public Doctor read(@PathVariable int id) {
        return doctorService.read(id);
    }

    @PutMapping("/doct-update")
    public Doctor update(@RequestBody Doctor doctor) {
        return doctorService.update(doctor);
    }

    @DeleteMapping("/delete-doct/{id}")
    public String Delete(@PathVariable int id) {
        return doctorService.delete(id);
    }
}

