package com.hospital_management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
@Entity
@Data
public class DoctorDept {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int doctor_id;

    private String tx_doctor_name;
    private String tx_doctor_degree;
    private int department_id;
    private String tx_department_name;
    private String tx_doctor_schedule;
    private String tx_doctor_phone_no;

}
