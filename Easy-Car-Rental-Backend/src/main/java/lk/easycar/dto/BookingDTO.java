package lk.easycar.dto;

import lk.easycar.entity.Driver;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class BookingDTO {

    private String bookingId;
    private String userRegister;
    private String carNumber;
    private String dateTime;
    private String duration;
    private String bankSlip;


}
