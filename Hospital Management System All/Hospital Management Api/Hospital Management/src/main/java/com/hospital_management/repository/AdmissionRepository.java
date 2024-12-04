package com.hospital_management.repository;

import com.hospital_management.model.AdmissionListDTO;
import com.hospital_management.model.Admission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AdmissionRepository extends JpaRepository<Admission, Integer> {

    @Query(nativeQuery = true, value = "Exec ACTION_LIST @tx_action_name = 'admission_list'")
    List<AdmissionListDTO> callActionProcedure();
}
