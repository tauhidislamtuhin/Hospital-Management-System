package com.hospital_management.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "T_H_PATIENT")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int patient_serial_no;

    private String tx_patient_name;
    private int patient_age;
    private String tx_patient_gender;
    private int department_id;
    private int doctor_id;
    private String tx_patient_problem;
    private String tx_patient_address;
    private String tx_patient_Phone;
    private String dt_visit_date;

}
