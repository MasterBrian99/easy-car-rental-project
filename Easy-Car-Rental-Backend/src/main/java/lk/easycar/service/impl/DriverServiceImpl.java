package lk.easycar.service.impl;

import lk.easycar.dto.DriverDTO;
import lk.easycar.dto.UserDTO;
import lk.easycar.entity.Driver;
import lk.easycar.entity.Vehicle;
import lk.easycar.repo.DriverRepo;
import lk.easycar.repo.VehicleRepo;
import lk.easycar.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

        @Autowired
       private DriverRepo driverRepo;


        @Autowired
        ModelMapper mapper;

    @Override
    public void addDriver(DriverDTO driverDTO) {
        driverRepo.save(mapper.map(driverDTO,Driver.class));
    }

    @Override
    public ArrayList<DriverDTO> getAllDrivers() {
        return null;
    }

    @Override
    public void deleteDriver(String id) {

    }

    @Override
    public DriverDTO searchDriver(String id) {
        Optional <Driver> driver= driverRepo.findById(id);
        return driver.map(value -> mapper.map(value, DriverDTO.class)).orElse(null);
    }

    @Override
    public void updateDriver(DriverDTO driverDTO) {

    }
}
