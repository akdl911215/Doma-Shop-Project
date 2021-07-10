package api.betadoma.back.user.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;

@SpringBootTest
public class UserRepositoryTests {

    @Autowired
    UserRepository userRepository;

    @Commit
    @Transactional
    @Test
    public void testClass(){ // testClass() 메서드는 repository 인터페이스 타입의 실제 객체가 어떤 것인지 확인, 동적 프록시라는 방식으로 만들어진다.
        System.out.println(userRepository.getClass().getName());
    }
}
