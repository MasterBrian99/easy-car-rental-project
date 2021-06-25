package lk.easycar.controller;


import lk.easycar.dto.BookingDTO;
import lk.easycar.service.BookingService;
import lk.easycar.util.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/api/v1/booking")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveBooking(
            @RequestParam("bookingId") String bookingId,
            @RequestParam("userRegister") String userRegister,
            @RequestParam("carNumber") String carNumber,
            @RequestParam("dateTime") String dateTime,
            @RequestParam("duration") String duration,
            @RequestParam("bookingId") MultipartFile file
    )  {
    String path="";

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

        BookingDTO bookingDTO=new BookingDTO(bookingId,userRegister,carNumber,dateTime,duration,img);
        System.out.println(bookingDTO);
        bookingService.addBooking(bookingDTO);
        return new ResponseEntity(new StandradResponse("201","done", bookingDTO), HttpStatus.CREATED);
    }

}
