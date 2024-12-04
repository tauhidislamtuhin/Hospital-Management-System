package com.hospital_management.repository;

import com.hospital_management.model.DoctorDept;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DoctorDeptRepository extends JpaRepository<DoctorDept, Integer> {

    @Query(value = "EXEC DoctorDept :deptId", nativeQuery = true)
    List<Object[]> findDoctorByDepartment(@Param("deptId")int deptId);
}
