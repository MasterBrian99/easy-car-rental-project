package lk.easycar.dto;

import lk.easycar.entity.Vehicle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data
@AllArgsConstructor
public class VehicleImageDTO {

    Vehicle vehicle;
    private String image1;
    private String image2;
    private String image3;
    private String image4;

}
