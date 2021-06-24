package lk.easycar.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class DriverDTO {
    private String username;
    private String fullName;
    private String email;
    private String address;
    private String password;
    private String role;

}
