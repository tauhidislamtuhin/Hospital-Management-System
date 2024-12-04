package com.hospital_management.service;

import com.hospital_management.model.Treatment;
import com.hospital_management.model.TreatmentDTO;
import com.hospital_management.repository.TreatmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TreatmentService {

    @Autowired
    private TreatmentRepository treatmentRepository;

    public List<TreatmentDTO> executeTreatmentListProcedure() {
        return treatmentRepository.callActionProcedure();
    }

    public Treatment create(Treatment treatment){
        return treatmentRepository.save(treatment);
    }
    public List<Treatment> readAll(){
        return treatmentRepository.findAll();
    }
    public Treatment read(int id){
        return treatmentRepository.findById(id).orElse(null);
    }
    public Treatment update(Treatment treatment) {
        Treatment treatmentDetail = treatmentRepository.findById(treatment.getTreatment_id()).orElse(null);
        treatmentDetail.setDoctor_id(treatment.getDoctor_id());
        treatmentDetail.setPatient_serial_no(treatment.getPatient_serial_no());
        treatmentDetail.setTx_medicine_names(treatment.getTx_medicine_names());
        treatmentDetail.setTx_test_names(treatment.getTx_test_names());
        treatmentDetail.setTreatment_fee(treatment.getTreatment_fee());
        return treatmentRepository.save(treatment);
    }
    public String delete(int id){
        treatmentRepository.deleteById(id);
        return "Successfully Deleted";
    }
}
