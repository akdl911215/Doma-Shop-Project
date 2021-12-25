package org.beta.zon.repository;


import org.beta.zon.memo.entity.Memo;
import org.beta.zon.user.entity.User;
import org.beta.zon.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
public class UserRepositoryTests {

    @Autowired
    UserRepository userRepository;

    @Test
    public void testDelete() {

        Long userId = 100L;

        // 삭제하려는 번호(mno)의 엔티티 객체가 있는지 먼저 확인하고, 삭제
        // 해당 데이터가 존재하지 않으면 org.springframework.dao.EmptyResultDataAccessException 예외 발생
        userRepository.deleteById(userId);
    }

    @Test
    public void testUpdate() {

        User user = User.builder().userId(100L).username("Update Name").build();

        // save() 해당 엔티티의 @Id값이 일치하는지 확인해서 insert 혹은 updte 작업 처리
        System.out.println(userRepository.save(user));
    }

    @Transactional // getOne을 사용하기 위해 추가
    @Test
    public void testSelect2() { // getOne을 사용할 때 동작 예시
        // ================================== 이 출력 후 Hibernate

        // 데이터베이스 존재하는 userId
        Long userId = 100L;

        User user = userRepository.getOne(userId);

        System.out.println("==================================");

        System.out.println(user);
    }

    @Test
    public void testSelect() { // findById를 사용할 때 동작 예시
        // Hibernate 출력 후 ==================================

        // 데이터베이스에 존재하는 userId
        Long userId = 100L;

        // findById()의 경우 Optional 타입으로 반환 된다.
        // Optional = NullPointerException 를 피할 수 있게 도와준다.
        Optional<User> result = userRepository.findById(userId);

        System.out.println("=================================");

        if (result.isPresent()){
            User user = result.get();
            System.out.println(user);
        }
    }


    @Test
    public void testInsertDummies() {

        IntStream.rangeClosed(1, 100).forEach(i -> {
            User user = User.builder().username("user name = " + i).build();
            userRepository.save(user);
        });
    }

    @Test
    public void testClass() {

        System.out.println(userRepository.getClass().getName());

    }
}
