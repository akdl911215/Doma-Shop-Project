package org.beta.zon.user.repository;

import org.beta.zon.memo.entity.Memo;
import org.beta.zon.memo.repository.MemoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
public class MemoRepositoryTests {

    @Autowired
    MemoRepository memoRepository;

    @Test
    public void testDelete() {

        Long mno = 100L;

        // 삭제하려는 번호(mno)의 엔티티 객체가 있는지 먼저 확인하고, 삭제
        // 해당 데이터가 존재하지 않으면 org.springframework.dao.EmptyResultDataAccessException 예외 발생
        memoRepository.deleteById(mno);
    }

    @Test
    public void testUpdate() {

        Memo memo = Memo.builder().mno(101L).memoText("Update Text").build();

        // save() 해당 엔티티의 @Id값이 일치하는지 확인해서 insert 혹은 updte 작업 처리
        System.out.println(memoRepository.save(memo));
    }

    @Transactional // getOne을 사용하기 위해 추가
    @Test
    public void testSelect2() { // getOne을 사용할 때 동작 예시
        // ================================== 이 출력 후 Hibernate

        // 데이터베이스 존재하는 mno
        Long mno = 100L;

        Memo memo = memoRepository.getOne(mno);

        System.out.println("==================================");

        System.out.println(memo);
    }

    @Test
    public void testSelect() { // findById를 사용할 때 동작 예시
        // Hibernate 출력 후 ==================================

        // 데이터베이스에 존재하는 mno
        Long mno = 100L;

        // findById()의 경우 Optional 타입으로 반환 된다.
        // Optional = NullPointerException 를 피할 수 있게 도와준다.
        Optional<Memo> result = memoRepository.findById(mno);

        System.out.println("=================================");

        if (result.isPresent()){
            Memo memo =result.get();
            System.out.println(memo);
        }
    }

    @Test
    public void testInsertDummies() {

        IntStream.rangeClosed(1, 100).forEach(i -> {
            Memo memo = Memo.builder().memoText("Sample..." + i).build();
            memoRepository.save(memo);
        });
    }

    @Test
    public void testClass() {

        System.out.println(memoRepository.getClass().getName());

    }
}
