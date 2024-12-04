package com.hospital_management.controller;

import com.hospital_management.model.Admission;
//import com.hospital_management.model.AdmissionDetailDTO;
import com.hospital_management.model.AdmissionListDTO;
import com.hospital_management.service.AdmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:1841")
public class AdmissionController {

    @Autowired
    private AdmissionService admissionService;

    // For Store procedure query
    @GetMapping("/admission-list")
    public List<AdmissionListDTO> getAdmissionList() {
        return admissionService.executeAdmissionListProcedure();
    }


    @PostMapping("/create-admission")
    public Admission create(@RequestBody Admission admission) {
        return admissionService.create(admission);
    }
    @GetMapping("/read-admission-all")
    public List<Admission> readAllAdmission() {
        return admissionService.readAll();
    }

    @GetMapping("/read-admission/{id}")
    public Admission read(@PathVariable int id) {
        return admissionService.read(id);
    }

    @PutMapping("/admission-update")
    public Admission update(@RequestBody Admission admission) {
        return admissionService.update(admission);
    }
    @DeleteMapping("/delete-admission/{id}")
    public String Delete(@PathVariable int id) {
        return admissionService.delete(id);
    }

}
