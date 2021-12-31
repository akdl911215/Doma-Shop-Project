package org.beta.zon.common.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@MappedSuperclass // 해당 어노테이션이 적용된 클래스는 테이블로 생성되지 않는다.
                    // BaseEntity 클래스를 상속한 엔티티의 클래스로 데이터베이스 테이블이 생성
@EntityListeners(value = {AuditingEntityListener.class} ) // EntityListeners :JPA Entity에 이벤트가 발생하면 콜백을 처리하고 코드를 실행하는 방법
                // AuditingEntityListener : Spring Data JPA 에서 시간에 대해서 자동으로 값을 넣어주는 기능
@Getter
public class BaseEntity {

    @CreatedDate // JPA Auditing @CreatedDate : Entity가 생성되어 저장될 때 시간이 자동으로 저장
    @Column(name = "regdate", updatable = false) // updatable = false : 해당 엔티티 객체를 데이터베이스에 반영할 때 refdate 칼럼값은 변경되지 않는다.
    private LocalDateTime regDate;

    @LastModifiedDate // JPA Auditing @LastModifiedDate : Entity가 생성되어 저장될 때 시간이 자동 저장
    @Column(name = "moddate")
    private LocalDateTime modDate;

}
