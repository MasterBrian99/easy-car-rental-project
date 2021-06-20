package lk.easycar.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class VehicleDTO {
    String registration_number;
    String brand;
    String type;
    String image_front_view;
    String image_back_view;
    String image_side_view;
    String image_interior_view;
    String color;
    int no_Of_Passengers;
    String transmission_type;
    String fuel_Type;
    double daily_Rate;
    double monthly_Rate;
    int free_Km_for_a_Day;
    int free_Km_for_a_month;
    double price_per_Extra_KM;
    int current_KM;
    String available;
}