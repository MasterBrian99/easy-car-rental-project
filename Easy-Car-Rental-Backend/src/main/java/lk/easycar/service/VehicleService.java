package lk.easycar.service;

import lk.easycar.dto.VehicleDTO;

import java.util.ArrayList;

public interface VehicleService {

    void addVehicle(VehicleDTO vehicleDTO);
    ArrayList<VehicleDTO> getAllVehicles();
    void deleteVehicle(String id);
    VehicleDTO searchVehicle(String id);
    void updateVehicle(VehicleDTO dto);

}
