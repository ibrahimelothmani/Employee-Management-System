package com.ibrahim.employee.services.Impl;

import com.ibrahim.employee.domain.dto.EmployeeDto;
import com.ibrahim.employee.domain.entities.Employee;
import com.ibrahim.employee.mapper.EmployeeMapper;
import com.ibrahim.employee.repositories.EmployeeRepository;
import com.ibrahim.employee.services.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
