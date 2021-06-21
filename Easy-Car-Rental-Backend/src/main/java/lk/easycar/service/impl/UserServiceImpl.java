package lk.easycar.service.impl;


import lk.easycar.dto.CustomerDTO;
import lk.easycar.entity.Customer;
import lk.easycar.repo.CustomerRepo;
import lk.easycar.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo customerRepo;


    @Autowired
    private ModelMapper mapper;

    @Override
    public void addCustomer(CustomerDTO customerDTO) {
        customerRepo.save(mapper.map(customerDTO, Customer.class));
    }

    @Override
    public ArrayList<CustomerDTO> getAllCustomers() {
        return null;
    }

    @Override
    public void deleteCustomer(String id) {

    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        Optional<Customer> customer = customerRepo.findById(id);
        return customer.map(value -> mapper.map(value, CustomerDTO.class)).orElse(null);
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {

    }
}
