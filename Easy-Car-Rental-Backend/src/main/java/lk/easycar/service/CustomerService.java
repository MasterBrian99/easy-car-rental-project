package lk.easycar.service;

import lk.easycar.dto.CustomerDTO;
import lk.easycar.dto.VehicleDTO;

import java.util.ArrayList;

public interface CustomerService {


    void addCustomer(CustomerDTO customerDTO);
    ArrayList<CustomerDTO> getAllCustomers();
    void deleteCustomer(String id);
    CustomerDTO  searchCustomer(String id);
    void updateCustomer(CustomerDTO dto);

}
