package com.hospital_management.controller;

import com.hospital_management.model.Treatment;
import com.hospital_management.model.TreatmentDTO;
import com.hospital_management.service.TreatmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:1841")
public class TreatmentController {

    @Autowired
    private TreatmentService treatmentService;

    // For Store procedure query
    @GetMapping("/treatment-list")
    public List<TreatmentDTO> getTreatmentList() {
        return treatmentService.executeTreatmentListProcedure();
    }


    @PostMapping("/create-treatment")
    public Treatment create(@RequestBody Treatment treatment) {
        return treatmentService.create(treatment);

    }
    @GetMapping("/read-treatment-all")
    public List<Treatment> readAllTreatment() {
        return treatmentService.readAll();
    }

    @GetMapping("/read-treatment/{id}")
    public Treatment read(@PathVariable int id) {
        return treatmentService.read(id);
    }

    @PutMapping("/treatment-update")
    public Treatment update(@RequestBody Treatment treatment) {
        return treatmentService.update(treatment);
    }

    @DeleteMapping("/delete-treatment/{id}")
    public String Delete(@PathVariable int id) {
        return treatmentService.delete(id);
    }
}
