package org.beta.zon.security;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootTest
public class PaasswordTests {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    public void testEncode() {

        String password = "1";

        String enPw = passwordEncoder.encode(password);

        System.out.println("enPw : " + enPw);

        // String.matches() 은 특정 패턴의 문자열을 포함하는지 확인
        boolean matchResult = passwordEncoder.matches(password, enPw);

        System.out.println("matchResult : " + matchResult);
    }
}
