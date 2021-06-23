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
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/customer")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveCustomer(@RequestPart("image")MultipartFile file,@RequestParam("username") String username,@RequestParam("fullName") String fullName,@RequestParam("role") String role,@RequestParam("address") String address,@RequestParam("pass") String pass,@RequestParam("approved") String approved) {
        String path = "";
        try{
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            System.out.println(file);
            File uploadsDir = new File(projectPath + "/uploads");
            uploadsDir.mkdir();
            path = String.valueOf(uploadsDir);
            file.transferTo(new File(path + "/" + file.getOriginalFilename()));
        }catch (Exception ignored){
        }
        String img = path + "/" + file.getOriginalFilename();
        System.out.println(path);

        UserDTO userDTO=new UserDTO(username,fullName,role,img,address,pass,approved);
        System.out.println(userDTO);
        userService.addUser(userDTO);
        return new ResponseEntity(new StandradResponse("201","done", userDTO),HttpStatus.CREATED);
    }

        @PutMapping(path="/update",consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
        public ResponseEntity updateCus(@RequestBody UserDTO  userDTO){
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



//    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public ResponseEntity fileUpload(@RequestPart("file") MultipartFile file, @RequestParam("vehicleNum") String vehicleNum, @RequestParam("brand") String brand, @RequestParam("type") String type, @RequestParam("passenger") String passenger, @RequestParam("color") String color, @RequestParam("priceForKm") int priceForKm, @RequestParam("transmission") String transmission, @RequestParam("fuel") String fuel, @RequestParam("dailyPrice") double dailyPrice, @RequestParam("monthPrice") double monthPrice, @RequestParam("freeKmForDay") int freeKmForDay, @RequestParam("freeKmForMonth") int freeKmForMonth, @RequestParam("currentKm") int currentKm) {
//        String path = "";
//        if (vehicleNum.trim().length() <= 0) {
//            throw new NotFoundException("Vehicle Number cannot be empty");
//        } else {
//            try {
//                String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
//                System.out.println(file);
//                File uploadsDir = new File(projectPath + "/uploads");
//                uploadsDir.mkdir();
//                path = String.valueOf(uploadsDir);
//                file.transferTo(new File(path + "/" + file.getOriginalFilename()));
//            } catch (IOException e) {
//                e.printStackTrace();
//            } catch (URISyntaxException e) {
//                e.printStackTrace();
//            }
//            String img = path + "/" + file.getOriginalFilename();
//            System.out.println(path);
//            CarDto carDto = new CarDto(vehicleNum, brand, type, passenger, color, priceForKm, transmission, fuel, dailyPrice, monthPrice, freeKmForDay, freeKmForMonth, currentKm, img);
//
//            System.out.println(file.getOriginalFilename());
//            System.out.println(carDto);
//            carService.saveCar(carDto);
//            return new ResponseEntity(new StandradResponse("201", "Done", carDto), HttpStatus.CREATED);
//
//        }
//    }
}


