package org.zerock.guestbook.board.domain;

import lombok.*;
import org.zerock.guestbook.common.domain.BaseEntity;
import org.zerock.guestbook.member.domain.Member;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString(exclude = "writer") // @ToString 은 항상 exclude
public class Board extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bno;
    private String tittle;
    private String content;

    @ManyToOne
    private Member writer; // 연관관계 지정
}
