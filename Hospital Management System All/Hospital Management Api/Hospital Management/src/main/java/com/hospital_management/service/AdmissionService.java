package com.hospital_management.service;

import com.hospital_management.model.Admission;
//import com.hospital_management.model.AdmissionDetailDTO;
import com.hospital_management.model.AdmissionListDTO;
import com.hospital_management.repository.AdmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class AdmissionService {

    @Autowired
    private AdmissionRepository admissionRepository;
    public List<AdmissionListDTO> executeAdmissionListProcedure() {
        return admissionRepository.callActionProcedure();
    }

//    public Admission create(AdmissionDetailDTO admissionDetailDTO) throws IOException {
//
//        Admission admission = new Admission();
//        admission.setPatient_serial_no(admissionDetailDTO.getPatient_serial_no());
//        admission.setAdmission_date(admissionDetailDTO.getAdmission_date());
//        admission.setDepartment_id(admissionDetailDTO.getDepartment_id());
//        admission.setDoctor_id(admissionDetailDTO.getDoctor_id());
//        admission.setPatient_documents(admissionDetailDTO.getPatient_documents().getBytes());
//        return admissionRepository.save(admission);
//    }

    public Admission create(Admission admission){
        return admissionRepository.save(admission);
    }

    public List<Admission> readAll(){
        return admissionRepository.findAll();
    }
    public Admission read(int id){
        return admissionRepository.findById(id).orElse(null);
    }
    public Admission update(Admission admissionDetail){
        Admission admission = admissionRepository.findById(admissionDetail.getAdmission_id()).orElse(null);
        admission.setPatient_serial_no(admissionDetail.getPatient_serial_no());
        admission.setAdmission_date(admissionDetail.getAdmission_date());
        admission.setDepartment_id(admissionDetail.getDepartment_id());
        admission.setDoctor_id(admissionDetail.getDoctor_id());
        admission.setPatient_documents(admissionDetail.getPatient_documents());
        return admissionRepository.save(admissionDetail);
    }

    public String delete(int id){
        admissionRepository.deleteById(id);
        return "Successfully Deleted";
    }

}
