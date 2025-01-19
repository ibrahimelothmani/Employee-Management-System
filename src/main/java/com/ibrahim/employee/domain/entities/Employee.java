package com.ibrahim.employee.domain.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name= "employees")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false)
    private String email;

}
