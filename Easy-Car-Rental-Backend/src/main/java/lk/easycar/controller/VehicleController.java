package lk.easycar.controller;

import lk.easycar.dto.VehicleDTO;
import lk.easycar.exception.NotFoundException;
import lk.easycar.util.StandradResponse;
import lk.easycar.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/vehicle")
public class VehicleController {
    @Autowired
    private VehicleService service;

    @PostMapping(path="/main",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveVehicle(@RequestBody VehicleDTO vehicleDTO){
        System.out.println(vehicleDTO.toString());
        service.addVehicle(vehicleDTO);
        return new ResponseEntity(new StandradResponse("201", "Done", vehicleDTO), HttpStatus.CREATED);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity  saveVehicle(
            @RequestParam("registration_number") String registration_number,
            @RequestParam ("brand") String brand,
            @RequestParam ("type") String type,
             @RequestParam ("image_front_view") MultipartFile image_front_view,
             @RequestParam ("image_back_view") MultipartFile image_back_view,
             @RequestParam ("image_side_view") MultipartFile image_side_view,
             @RequestParam ("image_interior_view") MultipartFile image_interior_view,
            @RequestParam ("color") String color,
            @RequestParam ("no_Of_Passengers") int no_Of_Passengers,
            @RequestParam ("transmission_type") String transmission_type,
            @RequestParam ("fuel_Type") String fuel_Type,
            @RequestParam ("daily_Rate") double daily_Rate,
            @RequestParam ("monthly_Rate") double monthly_Rate,
            @RequestParam ("free_Km_for_a_Day") int free_Km_for_a_Day,
            @RequestParam ("free_Km_for_a_month") int free_Km_for_a_month,
            @RequestParam ("price_per_Extra_KM") double price_per_Extra_KM,
            @RequestParam ("current_KM") int current_KM,
            @RequestParam ("available") String available
            ){
        String path="";
            try{
                String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
//                System.out.println(projectPath);
                File uploadsDir = new File(projectPath + "/uploads");
                uploadsDir.mkdir();
                path = String.valueOf(uploadsDir);
                image_front_view.transferTo(new File(path + "/" + image_front_view.getOriginalFilename()));
                image_back_view.transferTo(new File(path + "/" + image_back_view.getOriginalFilename()));
                image_side_view.transferTo(new File(path + "/" + image_side_view.getOriginalFilename()));
                image_interior_view.transferTo(new File(path + "/" + image_interior_view.getOriginalFilename()));

            }catch (Exception ignored){

            }
        String front_image=path +"/" +image_front_view.getOriginalFilename();
        String back_image=path +"/" +image_back_view.getOriginalFilename();
        String side_image=path +"/" +image_side_view.getOriginalFilename();
        String interior_image=path +"/" +image_interior_view.getOriginalFilename();

        VehicleDTO vehicleDTO=new VehicleDTO(
                registration_number,
                brand,
                type,
                front_image,
                back_image,side_image,
                interior_image,color,
                no_Of_Passengers,
                transmission_type,
                fuel_Type,
                daily_Rate,
                monthly_Rate,
                free_Km_for_a_Day,
                free_Km_for_a_month,
                price_per_Extra_KM,
                current_KM,
                available
        );
        System.out.println(vehicleDTO);
        service.addVehicle(vehicleDTO);
        return new ResponseEntity(new StandradResponse("201","done", vehicleDTO),HttpStatus.CREATED);

    }


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllCustomers() {
        ArrayList<VehicleDTO> allCustomers = service.getAllVehicles();
        return new ResponseEntity(new StandradResponse("200", "Done", allCustomers), HttpStatus.OK);
    }

    @GetMapping(path = "/{vehicle_id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchVehicle(@PathVariable String vehicle_id) {
        VehicleDTO customerDTO = service.searchVehicle(vehicle_id);
        return new ResponseEntity(new StandradResponse("200", "Done", customerDTO), HttpStatus.OK);
    }
    @DeleteMapping(params = {"vehicle_id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteVehicle(@RequestParam String vehicle_id) {
        service.deleteVehicle(vehicle_id);
        return new ResponseEntity(new StandradResponse("200", "Done", null), HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateCustomer(@RequestBody VehicleDTO dto) {
        if (dto.getRegistration_number().trim().length() <= 0) {
            throw new NotFoundException("No id provided to update");
        }
        service.updateVehicle(dto);
        return new ResponseEntity(new StandradResponse("200", "Done", dto), HttpStatus.OK);
    }
}
