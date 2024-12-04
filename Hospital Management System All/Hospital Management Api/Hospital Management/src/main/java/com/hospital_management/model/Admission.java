package com.hospital_management.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "T_H_ADMISSION")
public class Admission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int admission_id;

    private int patient_serial_no;
    private String admission_date ;
    private int department_id;
    private int doctor_id;
    private String patient_documents;

}
