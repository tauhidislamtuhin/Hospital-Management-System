package com.hospital_management.controller;

import com.hospital_management.model.Department;
import com.hospital_management.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:1841")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @PostMapping("/create-dept")
    public Department Create(@RequestBody Department department) {
        return departmentService.create(department);

    }
    @GetMapping("/read-dept-all")
    public List<Department> readAllDepartment() {
        return departmentService.readAll();
    }

    @GetMapping("/read-dept/{id}")
    public Department read(@PathVariable int id) {
        return departmentService.read(id);
    }

    @PutMapping("/dept-update")
    public Department update(@RequestBody Department thDepartment) {
        return departmentService.update(thDepartment);
    }

    @DeleteMapping("/delete-dept/{id}")
    public String Delete(@PathVariable int id) {
        return departmentService.delete(id);
    }
}
