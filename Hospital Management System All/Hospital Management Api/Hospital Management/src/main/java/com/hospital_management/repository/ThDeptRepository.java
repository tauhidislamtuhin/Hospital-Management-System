package com.hospital_management.repository;

import com.hospital_management.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThDeptRepository extends JpaRepository<Department,Integer> {
}
