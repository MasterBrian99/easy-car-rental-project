package lk.easycar.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.CascadeType.REMOVE;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "vehicle_list")

public class Vehicle {
    @Id
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

//  Registration_number: string;
//          Brand: string;
//          Type: string;
//          image_front_view: any;
//          image_back_view: any;
//          image_side_view: any;
//          image_interior_view: any;
//          Color: string;
//          No_Of_Passengers: number;
//          Transmission_type: string;
//          Fuel_Type: string;
//          Daily_Rate: number;
//          Monthly_Rate: number;
//          Free_Km_for_a_Day: number;
//          Free_Km_for_a_month: number;
//          Price_per_Extra_KM: number;
//          Current_KM: number;
//          available: string;