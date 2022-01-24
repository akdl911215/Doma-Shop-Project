package org.beta.zon.user.repository;

import org.beta.zon.user.domain.User;
import org.beta.zon.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;



@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;


    @Test
    void signin() {


//        User admin3 = userRepository.signin("admin3", "1");
//        System.out.println("admin3`" + admin3);


        Optional<User> admin31 = userRepository.findByUsername("admin3");
        System.out.println("admin31" + admin31.get());

    }
}