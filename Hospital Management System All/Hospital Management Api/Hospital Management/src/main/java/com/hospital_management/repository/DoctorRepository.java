package com.hospital_management.repository;

import com.hospital_management.model.Doctor;
import com.hospital_management.model.DoctorDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

    @Query(nativeQuery = true, value = "Exec ACTION_LIST @tx_action_name = 'doctor_list'")
    List<DoctorDTO> callActionProcedure();
}
