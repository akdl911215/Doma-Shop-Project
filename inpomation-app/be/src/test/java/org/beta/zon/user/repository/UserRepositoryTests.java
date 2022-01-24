package org.beta.zon.user.repository;


import org.beta.zon.user.domain.User;
import org.beta.zon.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
public class UserRepositoryTests {

    @Autowired
    UserRepository userRepository;

    @Test
    @Commit // 최종 결과를 커밋하기 위해 사용. 이를 적용하지 않으면 테스트 코드의 deleteBy..는 기본적으로 롤백(Rollback)
            // 처리가 되어서 결과가 반영되지 않는다. deleteBy는 실제 개발에는 많이 사용되지 않는데 그 이유는 SQL을 이용하듯이
            // 한번에 삭제가 이루어지는 것이 엔티티를 하나씩 삭제하기 때문
    @Transactional // deleteBy..은 객체를 가져오는 작업과 삭제하는 작업이 같이 이루어지기 때문에  
                   // @Transactional이 없다면 TransactionRequiredException 에러 발생
    public void testDeleteQueryMethod() {

        userRepository.deleteUserByUsernoLessThan(10L);
        
    }

    @Test
    public void testQueryMethodWithPageable() {

        Pageable pageable = PageRequest.of(0, 10, Sort.by("userno").descending());

        Page<User> result = userRepository.findByUsernoBetween(10L, 50L, pageable);

        result.get().forEach(user -> System.out.println(user));
    }

    @Test
    public void testQueryMethods() {
        // QuertMethod의 Between은 2개의 변수가 필요하다.
        // 쿼리메서드의 리턴 타입도 상당히 자유롭다
        // 중요한 내용 2가지는
        // * select를 하는 작업이라면 List 타입이나 배열을 이용할 수 있다.
        // * 파라미터에 Pageble 타입을 넣는 경우에는 무조건 Page<E> 타입
        
        List<User> list = userRepository.findByUsernoBetweenOrderByUsernoDesc(70L, 80L);

        for (User user : list) {
            System.out.println(user);
        }
    }

    @Test
    public void testSort2() {
        // 정렬 조건은 Sort 객체의 and()를 이용해서 여러 개의 정렬 조건을 다르게 지정할 수 있다.
        
        Sort sort1 = Sort.by("userno").descending();
        Sort sort2 = Sort.by("username").ascending();
        Sort sortAll = sort1.and(sort2); // and를 이용한 연결

        Pageable pageable = PageRequest.of(0, 10, sortAll); // 결합된 정렬 조건 사용

        Page<User> result = userRepository.findAll(pageable);

        result.get().forEach(memo -> {
            System.out.println(memo);
        });
    }

    @Test
    public void testSort() {
        // Sort는 한 개 혹은 여러 개의 필드 값을 이용해서 순차적 정렬(asc)이나 역순으로 정렬(desc)을 지정할 수 있다.

        Sort sort1 = Sort.by("userno").descending();

        Pageable pageable = PageRequest.of(0, 10, sort1);

        Page<User> result = userRepository.findAll(pageable);

        result.get().forEach(memo -> {
            System.out.println(memo);
        });
    }

    @Test
    public void testPageDefault() {

        // 1페이지 10개
        Pageable pageable = PageRequest.of(0, 10);

        Page<User> result = userRepository.findAll(pageable);

        System.out.println(result);

        System.out.println("-------------------------------------------------");

        System.out.println("Total pages: " + result.getTotalPages()); // 총 몇 페이지
        System.out.println("Total count: " + result.getTotalElements()); // 전체 개수
        System.out.println("Page Number: " + result.getNumber()); // 현재 페이지 번호. 0부터 시작
        System.out.println("Page Size: " + result.getSize()); // 페이지당 데이터 개수
        System.out.println("has next page?: " + result.hasNext()); // 다음 페이지 존재 여부
        System.out.println("first page?: " + result.isFirst()); // 시작 페이지(0) 여부

        System.out.println("-------------------------------------------------");

        for (User user : result.getContent()) {
            System.out.println(user);
        }

        System.out.println("-------------------------------------------------");
    }

    @Test
    public void testDelete() {

        Long userno = 100L;

        // 삭제하려는 번호(mno)의 엔티티 객체가 있는지 먼저 확인하고, 삭제
        // 해당 데이터가 존재하지 않으면 org.springframework.dao.EmptyResultDataAccessException 예외 발생
        userRepository.deleteById(userno);
    }

    @Test
    public void testUpdate() {

        User user = User.builder().userno(100L).username("Update Name").build();

        // save() 해당 엔티티의 @Id값이 일치하는지 확인해서 insert 혹은 updte 작업 처리
        System.out.println(userRepository.save(user));
    }

    @Transactional // getOne을 사용하기 위해 추가
    @Test
    public void testSelect2() { // getOne을 사용할 때 동작 예시
        // ================================== 이 출력 후 Hibernate

        // 데이터베이스 존재하는 userno
        Long userno = 100L;

        User user = userRepository.getOne(userno);

        System.out.println("==================================");

        System.out.println(user);
    }

    @Test
    public void testSelect() { // findById를 사용할 때 동작 예시
        // Hibernate 출력 후 ==================================

        // 데이터베이스에 존재하는 userno
        Long userno = 100L;

        // findById()의 경우 Optional 타입으로 반환 된다.
        // Optional = NullPointerException 를 피할 수 있게 도와준다.
        Optional<User> result = userRepository.findById(userno);

        System.out.println("=================================");

        if (result.isPresent()){
            User user = result.get();
            System.out.println(user);
        }
    }


    @Test
    public void testInsertDummies() {

        IntStream.rangeClosed(1, 10).forEach(i -> {
            User user = User.builder().username("username" + i)
                    .password("password" + i)
                    .name("name" + i)
                    .email("email" + i)
                    .phoneNumber("phoneNumber" + i)
                    .address("address" + i)
                    .build();
            userRepository.save(user);
        });
    }

    @Test
    public void testClass() {

        System.out.println(userRepository.getClass().getName());

    }
}
