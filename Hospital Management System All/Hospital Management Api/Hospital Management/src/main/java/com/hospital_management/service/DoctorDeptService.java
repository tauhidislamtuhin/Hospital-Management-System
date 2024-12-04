package com.hospital_management.service;

import com.hospital_management.repository.DoctorDeptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorDeptService {
    @Autowired
    private DoctorDeptRepository doctorDeptRepository;
    public List<Object[]> getDoctorsByDepartment(int deptId) {
        return doctorDeptRepository.findDoctorByDepartment(deptId);
}
}
