package com.hospital_management.model;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
@Table(name = "T_H_DEPARTMENT")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int department_id;

    private String tx_department_name;

}
