package lk.easycar.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
public class Booking {
    @Id
    private String bookingId;
    private String userRegister;
    private String carNumber;
    private String dateTime;
    private String duration;
    private String bankSlip;
    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "DriverID", referencedColumnName = "username", nullable = false)
    private Driver driver;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "carId", referencedColumnName = "registration_number", nullable = false)
    private Vehicle vehicle;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "user" , referencedColumnName = "username" ,nullable = false)
    private User user;
}
