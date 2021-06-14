package lk.easycar.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity

public class Vehicle {
    @Id
    String vehicle_Registration_number;
    String vehicle_brand;
    String vehicle_type;
    String vehicle_image;
    String vehicle_color;
    int vehicle_No_Of_Passengers;
    String vehicle_transmission_type;
    String vehicle_Fuel_Type;
    double vehicle_Daily_Rate;
    double vehicle_Monthly_Rate;
    int vehicle_Free_Km_for_a_Day;
    int vehicle_Free_Km_for_a_month;
    double vehicle_Price_per_Extra_KM;
    int vehicle_Current_KM;
}
