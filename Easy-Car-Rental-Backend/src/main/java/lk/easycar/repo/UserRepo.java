package lk.easycar.repo;

import lk.easycar.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User,String> {

    List<User> findByApprovedEquals(String approved);

}
