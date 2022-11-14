package org.zerock.guestbook.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.guestbook.board.domain.Reply;

public interface ReplyREpository extends JpaRepository<Reply, Long> {
}
