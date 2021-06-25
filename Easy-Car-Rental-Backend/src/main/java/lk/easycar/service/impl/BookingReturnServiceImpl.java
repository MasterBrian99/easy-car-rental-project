package lk.easycar.service.impl;


import lk.easycar.dto.BookingReturnDTO;
import lk.easycar.service.BookingReturnService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class BookingReturnServiceImpl implements BookingReturnService {
    @Override
    public void addBookingReturn(BookingReturnDTO bookingReturnDTO) {

    }

    @Override
    public ArrayList<BookingReturnDTO> getAllBookingReturn() {
        return null;
    }

    @Override
    public void deleteBookingReturn(String id) {

    }

    @Override
    public BookingReturnDTO searchBookingReturn(String id) {
        return null;
    }

    @Override
    public void updateBookingReturn(BookingReturnDTO bookingReturnDTO) {

    }
}
