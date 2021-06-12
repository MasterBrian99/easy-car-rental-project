package com.easycarrental.entity;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class Login {
    @Id
    String id;
    String name;

}
