package com.hospital_management.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "T_H_DOCTOR")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int doctor_id;

    private int department_id;
    private String tx_doctor_name;
    private String tx_doctor_gender;
    private String tx_doctor_degree;
    private String tx_doctor_schedule;
    private String tx_doctor_phone_no;
    private String doctor_photo;
    private int doctor_fee_bdt;


}
