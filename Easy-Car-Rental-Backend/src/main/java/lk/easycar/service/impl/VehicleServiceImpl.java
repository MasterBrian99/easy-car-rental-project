package lk.easycar.service.impl;

import lk.easycar.dto.UserDTO;
import lk.easycar.dto.VehicleDTO;
import lk.easycar.entity.Vehicle;
import lk.easycar.repo.VehicleRepo;
import lk.easycar.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepo vehicleRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void addVehicle(VehicleDTO vehicleDTO) {
       vehicleRepo.save(mapper.map(vehicleDTO,Vehicle.class));
    }

    @Override
    public ArrayList<VehicleDTO> getAllVehicles() {
        List<Vehicle> all = vehicleRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public void deleteVehicle(String id) {

    }

    @Override
    public VehicleDTO searchVehicle(String id) {

        Optional<Vehicle> vehicle=vehicleRepo.findById(id);
        return vehicle.map(value -> mapper.map(value, VehicleDTO.class)).orElse(null);

    }

    @Override
    public void updateVehicle(VehicleDTO dto) {

    }


}
