package api.betadoma.back.notice.domain;

import api.betadoma.back.common.domain.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "notices")
@AllArgsConstructor // 클래스의 각 필드에 대해 1개의 매개변수가 있는 생성자를 생성한다
// 클래스에 존재하는 모든 필드에 대한 생성자를 자동으로 생성
@NoArgsConstructor // 매개변수가 없는 생성자를 생성한다.
@Getter
@Builder
public class Notice extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notice_id", unique = true)
    private Long noticeId;

    @NotNull
    @Column(name = "itle")
    private String title;

    @Column(name = "password")
    private String password;

    @Column(name = "writer")
    private String writer;

    @Column(name = "content")
    private String content;

    @Column(name = "views")
    private String views;
}
