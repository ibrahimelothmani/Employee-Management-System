package com.ibrahim.employee.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class AdminDto {
    private UUID id;
    private String name;
    private String email;
    private String password;
}
