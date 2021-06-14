package com.easycar.service.impl;

import com.easycar.dto.VehicleDTO;
import com.easycar.entity.Vehicle;
import com.easycar.repo.VehicleRepo;
import com.easycar.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

/**
 * @author : Sanu Vithanage
 * @since : 0.1.0
 **/
@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepo vehicleRepo;

    @Autowired
    private ModelMapper mapper;



    @Override
    public ArrayList<VehicleDTO> getAllCustomers() {
        List<Vehicle> all = vehicleRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<VehicleDTO>>() {
        }.getType());
    }



}
