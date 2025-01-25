package com.ibrahim.employee.services.Impl;

import com.ibrahim.employee.domain.dto.AdminDto;
import com.ibrahim.employee.domain.entities.Admin;
import com.ibrahim.employee.exception.ResourceNotFoundException;
import com.ibrahim.employee.mapper.AdminMapper;
import com.ibrahim.employee.repositories.AdminRepository;
import com.ibrahim.employee.services.AdminService;
import org.springframework.stereotype.Service;


@Service
public class AdminServiceImpl implements AdminService {

    private final AdminRepository adminRepository;

    public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Override
    public AdminDto createAdmin(AdminDto adminDto) {
        Admin admin = AdminMapper.mapToAdmin(adminDto);
        Admin savedAdmin = adminRepository.save(admin);
        return AdminMapper.mapToAdminDto(savedAdmin);
    }
    @Override
    public AdminDto loginAdmin(AdminDto adminDto) {
        Admin admin = adminRepository.findById(adminDto.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found"));

        if (!admin.getPassword().equals(adminDto.getPassword())) {
            throw new IllegalArgumentException("Invalid login credentials");
        }

        return AdminMapper.mapToAdminDto(admin);
    }
}
