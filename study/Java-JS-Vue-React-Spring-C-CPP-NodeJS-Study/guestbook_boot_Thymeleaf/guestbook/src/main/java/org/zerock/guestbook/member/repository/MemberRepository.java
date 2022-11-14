package org.zerock.guestbook.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.guestbook.member.domain.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
