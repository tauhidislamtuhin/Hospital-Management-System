package com.hospital_management.service;

import com.hospital_management.model.Department;
import com.hospital_management.repository.ThDeptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    @Autowired
    private ThDeptRepository departmentRepository;

    public Department create(Department department) {
        return departmentRepository.save(department);
    }

    public List<Department> readAll(){
        return departmentRepository.findAll();
    }

    public Department read(int id) {
        return departmentRepository.findById(id).orElse(null);
    }
    public Department update(Department department) {
        Department dept = departmentRepository.findById(department.getDepartment_id()).orElse(null);
        dept.setTx_department_name(dept.getTx_department_name());

        return departmentRepository.save(department);
    }

    public String delete(int id) {
        departmentRepository.deleteById(id);
        return "Successfully Deleted";
    }

}
