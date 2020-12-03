package com.dreamweb.apiserver.Entities;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import javax.persistence.*;

@Entity
@Data
@Table(name ="user")
@RequiredArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String email;
    private String password;
}
