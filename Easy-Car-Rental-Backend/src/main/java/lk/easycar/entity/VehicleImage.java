package lk.easycar.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.CascadeType.REMOVE;

@Entity

@NoArgsConstructor
@Data
@AllArgsConstructor
@Table(name = "vehicleImage")
public class VehicleImage {
    @Id
    @GeneratedValue
    long id;
    private String image;

    @ManyToOne
    Vehicle vehicle;

}
