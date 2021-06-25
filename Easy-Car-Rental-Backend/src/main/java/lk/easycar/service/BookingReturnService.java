package lk.easycar.service;

import lk.easycar.dto.BookingDTO;
import lk.easycar.dto.BookingReturnDTO;
import lk.easycar.dto.DriverDTO;

import java.util.ArrayList;

public interface BookingReturnService {

    void addBookingReturn(BookingReturnDTO bookingReturnDTO);
    ArrayList<BookingReturnDTO> getAllBookingReturn();
    void deleteBookingReturn(String id);
    BookingReturnDTO searchBookingReturn(String id);
    void updateBookingReturn(BookingReturnDTO bookingReturnDTO);
}
