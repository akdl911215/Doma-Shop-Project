package org.zerock.guestbook.guestbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.zerock.guestbook.guestbook.domain.Guestbook;

public interface GuestbookRepository extends JpaRepository<Guestbook, Long>,
                                                QuerydslPredicateExecutor<Guestbook> {
}
