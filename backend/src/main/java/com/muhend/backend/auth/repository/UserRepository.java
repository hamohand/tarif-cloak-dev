package com.muhend.backend.auth.repository;

import com.muhend.backend.auth.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    //Search user by email
    User findByEmail(String email);
    //Search user by username
    User findByUsername(String username);

}
