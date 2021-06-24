package lk.easycar.service;

import lk.easycar.dto.DriverDTO;
import lk.easycar.dto.UserDTO;

import java.util.ArrayList;

public interface DriverService {



    void addDriver(DriverDTO driverDTO);
    ArrayList<DriverDTO> getAllDrivers();
    void deleteDriver(String id);
    DriverDTO searchDriver(String id);
    void updateDriver(DriverDTO driverDTO);

}
