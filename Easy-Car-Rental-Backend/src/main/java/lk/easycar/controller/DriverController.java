package lk.easycar.controller;


import lk.easycar.dto.DriverDTO;
import lk.easycar.dto.VehicleDTO;
import lk.easycar.service.DriverService;
import lk.easycar.util.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    private DriverService driverService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveDriver(@RequestBody DriverDTO driverDTO){
        System.out.println(driverDTO.toString());
            driverService.addDriver(driverDTO);
        return new ResponseEntity(new StandradResponse("201", "Done", driverDTO), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{username}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchDiver(@PathVariable String username){
        DriverDTO driverDTO=driverService.searchDriver(username);
        return new ResponseEntity(new StandradResponse("200", "Done", driverDTO), HttpStatus.OK);

    }

/*

     @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchCustomer(@PathVariable String id) {
        UserDTO userDTO = userService.searchUser(id);
        return new ResponseEntity(new StandradResponse("200", "Done", userDTO), HttpStatus.OK);
    }
 */
}
