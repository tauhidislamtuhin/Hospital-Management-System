package com.hospital_management.repository;

import com.hospital_management.model.Treatment;
import com.hospital_management.model.TreatmentDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TreatmentRepository extends JpaRepository<Treatment,Integer> {

    @Query(nativeQuery = true, value = "Exec ACTION_LIST @tx_action_name = 'treatment_list'")
    List<TreatmentDTO> callActionProcedure();
}
