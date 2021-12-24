package api.betadoma.back.notice.domain;

import api.betadoma.back.common.domain.BaseEntity;
import api.betadoma.back.user.domain.role.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(mappedBy = "notice")
    private List<NoticeFile> noticeFiles = new ArrayList<>();
    @ElementCollection(fetch = FetchType.LAZY)
    List<Role> roles;
    // @ElementCollection : 커렉션 객체임을 JPA에게 알려주는 어노테이션
    // 1. 연관된 부모 Entity 하나에만 연관되어 관리된다. (부모 Entity와 독립적으로 사용 X)
    // 2. 항상 부모와 함께 저장되고 삭제되므로 cascade 옵션을 제공하지 않는다. (cascade = ALL 인셈)
    // 3. 부모 Entity Id와 추가 컬럼(basic or embedded 타입)으로 구성된다.
    // 4. 기본적으로 식별자 개념이 없으므로 컬렉션 값 변경 시, 전체 삭제 후 새로 추가한다.

}
