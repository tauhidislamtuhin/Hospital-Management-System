package com.hospital_management.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name ="T_H_TREATMENT")
public class Treatment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int treatment_id;

    private int doctor_id ;
    private int patient_serial_no;
    private String tx_medicine_names;
    private String tx_test_names;
    private int treatment_fee;

}
