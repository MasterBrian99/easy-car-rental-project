package com.easycar.controller;

import com.easycar.dto.VehicleDTO;
import com.easycar.util.StandradResponse;
import com.easycar.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@RestController
@RequestMapping("/api/v1/customer")
public class VehicleController {

    @Autowired
    private VehicleService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllCustomers() {
        ArrayList<VehicleDTO> allCustomers = service.getAllCustomers();
        return new ResponseEntity(new StandradResponse("200", "Done", allCustomers), HttpStatus.OK);
    }



}
