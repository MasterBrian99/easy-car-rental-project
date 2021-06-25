package lk.easycar.dto;

import lk.easycar.entity.Driver;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookingDTO {

    private String bookingId;
    private String userRegister;
    private String carNumber;
    private String dateTime;
    private String duration;
    private String bankSlip;


}
