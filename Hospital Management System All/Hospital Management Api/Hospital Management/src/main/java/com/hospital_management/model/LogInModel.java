package com.hospital_management.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "T_H_LOGIN")
public class LogInModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable=false, unique=true)
    private String username;
    @Column(nullable=false)
    private String password;
    @Column(nullable=false, unique=true)
    private String email;
    @Column(nullable=false)
    private String position;
}
