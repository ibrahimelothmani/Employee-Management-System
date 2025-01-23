package com.ibrahim.employee.mapper;

import com.ibrahim.employee.domain.dto.EmployeeDto;
import com.ibrahim.employee.domain.entities.Employee;
import org.mapstruct.Mapper;

@Mapper
public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()

        );
    }
}
