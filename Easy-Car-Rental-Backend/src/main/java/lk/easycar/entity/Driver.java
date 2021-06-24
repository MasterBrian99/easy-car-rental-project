package lk.easycar.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
public class Driver {
    @Id
    private String username;
    private String fullName;
    private String email;
    private String address;
    private String password;
    private String role;

   @OneToMany(mappedBy = "driver")
   private List<Booking> orders = new ArrayList<>();

}
