package com.hospital_management.controller;

import com.hospital_management.service.DoctorDeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:1841")
public class DoctorDeptController {
    @Autowired
    private DoctorDeptService doctorDeptService;

    @GetMapping("/department/{deptId}")
    public ResponseEntity<List<Object[]>> getDoctorsByDepartment(@PathVariable int deptId) {
        List<Object[]> doctors = doctorDeptService.getDoctorsByDepartment(deptId);
        return new ResponseEntity<>(doctors, HttpStatus.OK);}
}
