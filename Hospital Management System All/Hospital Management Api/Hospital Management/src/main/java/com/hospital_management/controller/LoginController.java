package com.hospital_management.controller;


import com.hospital_management.model.LogInModel;
import com.hospital_management.service.LogInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:1841")
public class LoginController {
    @Autowired
    private LogInService logInService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        LogInModel logInModel = logInService.findByUsername(username);

        if (logInModel != null && logInModel.getPassword().equals(password)) {
            // Authentication successful
            return ResponseEntity.ok(logInModel.getPosition());
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }

    @PostMapping("/createlogin")
    public LogInModel Create(@RequestBody LogInModel logInModel) {

        return logInService.Create(logInModel);

    }

}
