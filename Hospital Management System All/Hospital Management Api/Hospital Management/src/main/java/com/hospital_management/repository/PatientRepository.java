package com.hospital_management.repository;

import com.hospital_management.model.Patient;
import com.hospital_management.model.PatientDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Integer> {

    @Query(nativeQuery = true, value = "Exec ACTION_LIST @tx_action_name = 'patient_list'")
    List<PatientDTO> callActionProcedure();
}
