package com.hospital_management.repository;


import com.hospital_management.model.LogInModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogInRepository extends JpaRepository<LogInModel,Integer> {
    LogInModel findByUsername(String username);
}
