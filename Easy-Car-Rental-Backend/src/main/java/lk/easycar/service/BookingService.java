package lk.easycar.service;

import lk.easycar.dto.BookingDTO;
import lk.easycar.dto.DriverDTO;

import java.util.ArrayList;

public interface BookingService {
    void addBooking(BookingDTO bookingDTO);
    ArrayList<BookingDTO> getAllBooking();
    void deleteBooking(String id);
    DriverDTO searchBooking(String id);
    void updateBooking(BookingDTO bookingDTO);
}
