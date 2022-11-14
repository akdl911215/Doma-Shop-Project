package org.zerock.guestbook.member.domain;

import lombok.*;
import org.zerock.guestbook.common.domain.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class Member extends BaseEntity {

    @Id
    private String email;
    private String password;
    private String name;
}
