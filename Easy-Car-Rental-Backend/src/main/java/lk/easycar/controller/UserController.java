package lk.easycar.controller;


import lk.easycar.dto.UserDTO;
import lk.easycar.dto.VehicleDTO;
import lk.easycar.service.UserService;
import lk.easycar.util.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(consumes=MediaType.APPLICATION_JSON_VALUE,produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveCustomer(@RequestBody UserDTO userDTO) {
        userService.addUser(userDTO);
        return new ResponseEntity(new StandradResponse("201","done", userDTO),HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchCustomer(@PathVariable String id) {
        UserDTO userDTO = userService.searchUser(id);
        return new ResponseEntity(new StandradResponse("200", "Done", userDTO), HttpStatus.OK);
    }

    @GetMapping(path="/approval/{status}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity findPendingUsers(@PathVariable String status){

    ArrayList<UserDTO> userDTOS=userService.findPendingUsers(status);
      return new ResponseEntity(new StandradResponse("200", "Done", userDTOS), HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateUser(@RequestBody UserDTO userDTO){
        userService.updateUser(userDTO);
        return new ResponseEntity(new StandradResponse("200", "Done", userDTO), HttpStatus.OK);

    }
}
