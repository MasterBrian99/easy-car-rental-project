package lk.easycar.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class CustomerDTO {
    private String username;
    private String fullName;
    private String role;
    private String image;
    private String address;
    private String password;
}
