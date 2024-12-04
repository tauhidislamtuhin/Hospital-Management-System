package com.hospital_management.service;


import com.hospital_management.model.LogInModel;
import com.hospital_management.repository.LogInRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogInService {
    @Autowired
    private LogInRepository logInRepository;


    public LogInModel findByUsername(String username) {
        return logInRepository.findByUsername(username);
    }

    public LogInModel Create(LogInModel logInModel) {
        return logInRepository.save(logInModel);
    }
}
