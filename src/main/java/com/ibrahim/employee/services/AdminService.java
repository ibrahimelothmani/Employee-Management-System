package com.ibrahim.employee.services;

import com.ibrahim.employee.domain.dto.AdminDto;

import java.util.UUID;

public interface AdminService {

    AdminDto createAdmin(AdminDto adminDto);
    AdminDto loginAdmin(AdminDto adminDto);
}
