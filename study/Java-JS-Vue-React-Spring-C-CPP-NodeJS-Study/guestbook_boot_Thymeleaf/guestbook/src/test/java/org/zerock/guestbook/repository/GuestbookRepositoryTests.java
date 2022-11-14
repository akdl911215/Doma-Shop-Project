package org.zerock.guestbook.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;
import org.zerock.guestbook.guestbook.domain.Guestbook;
import org.zerock.guestbook.guestbook.domain.QGuestbook;
import org.zerock.guestbook.guestbook.repository.GuestbookRepository;

import javax.transaction.Transactional;

import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
public class GuestbookRepositoryTests {

    @Autowired
    private GuestbookRepository guestbookRepository;

//    @Commit
//    @Transactional
//    @Test
//    public void testQuery1() {
//
//        Pageable pageable = PageRequest.of(0, 10, Sort.by("gno").descending());
//        QGuestbook qGuestbook = QGuestbook.guestbook;
//        String
//    }

    @Commit
    @Transactional
    @Test
    public void updateTest() {
        Optional<Guestbook> result = guestbookRepository.findById(300L);

        if(result.isPresent()){ // isPresent : value가 존재할 때만 수행되는 로직이 있을 때 ifPresent() 메서드를 사용
            Guestbook guestbook = result.get();

            guestbook.changeTitle("Changed Title....!!");
            guestbook.changeContent("Changed Content....!!");

            guestbookRepository.save(guestbook);
        }
    }

    @Commit
    @Transactional
    @Test
    public void insertDummies() {
        IntStream.rangeClosed(1,300).forEach(i -> {

            Guestbook guestbook = Guestbook.builder()
                        .title("Title ::: " + i)
                        .content("Content ::: " + i)
                        .writer("Writer ::: " + i)
                    .build();
            System.out.println(guestbookRepository.save(guestbook));
        });
    }
}
