package lk.easycar.service;

import lk.easycar.dto.UserDTO;

import java.util.ArrayList;

public interface UserService {


    void addUser(UserDTO userDTO);
    ArrayList<UserDTO> getAllUser();
    void deleteUser(String id);
    UserDTO searchUser(String id);
    void updateUser(UserDTO dto);
    ArrayList<UserDTO> findPendingUsers(String approved);
}
