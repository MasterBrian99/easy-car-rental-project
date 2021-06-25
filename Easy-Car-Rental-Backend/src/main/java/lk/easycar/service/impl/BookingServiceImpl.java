package lk.easycar.service.impl;

import lk.easycar.dto.BookingDTO;
import lk.easycar.dto.DriverDTO;
import lk.easycar.entity.Booking;
import lk.easycar.repo.BookingRepo;
import lk.easycar.service.BookingService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

        @Autowired
        private BookingRepo bookingRepo;
        @Autowired
        ModelMapper mapper;

    @Override
    public void addBooking(BookingDTO bookingDTO) {
        bookingRepo.save(mapper.map(bookingDTO, Booking.class));

    }

    @Override
    public ArrayList<BookingDTO> getAllBooking() {
        return null;
    }

    @Override
    public void deleteBooking(String id) {

    }

    @Override
    public DriverDTO searchBooking(String id) {
        return null;
    }

    @Override
    public void updateBooking(BookingDTO bookingDTO) {

    }
}
