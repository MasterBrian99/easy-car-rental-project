package com.easycar.repo;

import com.easycar.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;


public interface VehicleRepo extends JpaRepository<Vehicle, String> {

}
