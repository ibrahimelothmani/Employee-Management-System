package com.ibrahim.employee.domain.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name= "admin")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    private String email;

    private String password;
}
