package lk.easycar.service.impl;


import lk.easycar.dto.UserDTO;
import lk.easycar.dto.VehicleDTO;
import lk.easycar.entity.User;
import lk.easycar.entity.Vehicle;
import lk.easycar.repo.UserRepo;
import lk.easycar.service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;


    @Autowired
    private ModelMapper mapper;

    @Override
    public void addUser(UserDTO userDTO) {
        userRepo.save(mapper.map(userDTO, User.class));
    }

    @Override
    public ArrayList<UserDTO> getAllUser() {
        return null;
    }

    @Override
    public void deleteUser(String id) {

    }

    @Override
    public UserDTO searchUser(String id) {
        Optional<User> user = userRepo.findById(id);
        return user.map(value -> mapper.map(value, UserDTO.class)).orElse(null);
    }

    @Override
    public void updateUser(UserDTO dto) {

    }

    @Override
    public ArrayList<UserDTO> findPendingUsers(String approved) {
        List<User> all = userRepo.findByApprovedEquals(approved);
        return mapper.map(all, new TypeToken<ArrayList<UserDTO>>() {
        }.getType());
    }
}


