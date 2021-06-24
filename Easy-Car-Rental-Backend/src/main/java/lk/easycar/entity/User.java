package lk.easycar.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User {
    @Id
    private String username;
    private String fullName;
    private String role;
    private String image;
    private String address;
    private String pass;
    private String approved;

}
