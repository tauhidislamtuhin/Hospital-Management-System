package com.hospital_management.service;

import com.hospital_management.model.DoctorDTO;
//import com.hospital_management.model.DoctorDetailDTO;
import com.hospital_management.model.Doctor;
import com.hospital_management.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public List<DoctorDTO> executeDoctorListProcedure() {
        return doctorRepository.callActionProcedure();
    }

//    public Doctor create(DoctorDetailDTO doctorDetailDTO) throws IOException {
//
//        Doctor doctor = new Doctor();
//        doctor.setDepartment_id(doctorDetailDTO.getDepartment_id());
//        doctor.setTx_doctor_name(doctorDetailDTO.getTx_doctor_name());
//        doctor.setTx_doctor_gender(doctorDetailDTO.getTx_doctor_gender());
//        doctor.setTx_doctor_degree(doctorDetailDTO.getTx_doctor_degree());
//        doctor.setTx_doctor_schedule(doctorDetailDTO.getTx_doctor_schedule());
//        doctor.setTx_doctor_phone_no(doctorDetailDTO.getTx_doctor_phone_no());
//        doctor.setDoctor_photo(doctorDetailDTO.getDoctor_photo().getBytes());
//        doctor.setDoctor_fee_bdt(doctorDetailDTO.getDoctor_fee_bdt());
//        return doctorRepository.save(doctor);
//    }
    public Doctor create(Doctor doctor){
        return doctorRepository.save(doctor);
    }

    public List<Doctor> readAll(){
        return doctorRepository.findAll();
    }
    public Doctor read(int id){
        return doctorRepository.findById(id).orElse(null);
    }
    public Doctor update(Doctor doctorDetail){
        Doctor doctor = doctorRepository.findById(doctorDetail.getDoctor_id()).orElse(null);
        doctor.setDepartment_id(doctorDetail.getDepartment_id());
        doctor.setTx_doctor_name(doctorDetail.getTx_doctor_name());
        doctor.setTx_doctor_gender(doctorDetail.getTx_doctor_gender());
        doctor.setTx_doctor_degree(doctorDetail.getTx_doctor_degree());
        doctor.setTx_doctor_schedule(doctorDetail.getTx_doctor_schedule());
        doctor.setTx_doctor_phone_no(doctorDetail.getTx_doctor_phone_no());
        doctor.setDoctor_photo(doctorDetail.getDoctor_photo());
        doctor.setDoctor_fee_bdt(doctorDetail.getDoctor_fee_bdt());
        return doctorRepository.save(doctorDetail);
    }
    public String delete(int id){
        doctorRepository.deleteById(id);
        return "Successfully Deleted";
    }

}
