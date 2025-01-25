package com.ibrahim.employee.controllers;

import com.ibrahim.employee.domain.dto.AdminDto;
import com.ibrahim.employee.services.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")

public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    // Add Admin
    @PostMapping("/add")
    public ResponseEntity<Object> createdAdmin(@RequestBody AdminDto adminDto) {
        if (adminDto.getName() == null || adminDto.getName().isEmpty()) {
            // Return an error response with a message as Object
            return new ResponseEntity<>("Username is required", HttpStatus.BAD_REQUEST);
        }
        AdminDto savedAdmin = adminService.createAdmin(adminDto);
        return new ResponseEntity<>(savedAdmin, HttpStatus.CREATED);
    }

    //    Login Admin
    @GetMapping("/login")
    public ResponseEntity<AdminDto> loginAdmin(@RequestBody AdminDto adminDto){
        AdminDto savedAdmin = adminService.loginAdmin(adminDto);
        return new ResponseEntity<>(savedAdmin, HttpStatus.OK);
    }
}
