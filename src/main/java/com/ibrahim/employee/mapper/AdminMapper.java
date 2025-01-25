package com.ibrahim.employee.mapper;

import com.ibrahim.employee.domain.dto.AdminDto;
import com.ibrahim.employee.domain.entities.Admin;

public class AdminMapper {

    public static AdminDto mapToAdminDto(Admin admin) {
        AdminDto adminDto = new AdminDto();
        adminDto.setId(admin.getId());
        adminDto.setName(admin.getName());
        adminDto.setEmail(admin.getEmail());
        adminDto.setPassword(admin.getPassword());
        return adminDto;
    }

    public static Admin mapToAdmin(AdminDto adminDto) {
        Admin admin = new Admin();
        admin.setId(adminDto.getId());
        admin.setName(adminDto.getName());
        admin.setEmail(adminDto.getEmail());
        admin.setPassword(adminDto.getPassword());
        return admin;
    }

}
