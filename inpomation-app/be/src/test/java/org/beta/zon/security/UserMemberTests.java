package org.beta.zon.security;

import org.beta.zon.user.domain.User;
import org.beta.zon.user.domain.role.Role;
import org.beta.zon.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
public class UserMemberTests {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    public void testRead() {

        Optional<User> result = userRepository.findByUsername("username100", false);

        User user = result.get();

        System.out.println(user);
    }

    @Test
    public void inserDummies() {

        // 1 - 80 까지는 MEMBER만 지정
        // 81 - 90 까지는 MEMBER, MANAGER
        // 91 - 100 까지는 MEMBER, MANAGER, ADMIN

        IntStream.rangeClosed(1, 100).forEach(i -> {
            User user = User.builder()
                    .username("username"+i)
                    .password(passwordEncoder.encode("1"))
                    .name("사용자"+i)
                    .email("user"+i+"@beta.zon")
                    .phoneNumber("phoneNumber"+i)
                    .address("address"+i)
                    .fromSocial(false)
                    .build();

            // default role
            user.addMemberRole(Role.MEMBER);

            if (i > 80) user.addMemberRole(Role.MANAGER);

            if (i > 90) user.addMemberRole(Role.ADMIN);

            userRepository.save(user);
        });
    }
}
