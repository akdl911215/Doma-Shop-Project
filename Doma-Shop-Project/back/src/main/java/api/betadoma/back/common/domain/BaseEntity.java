package api.betadoma.back.common.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@MappedSuperclass // 객체의 입장에서 공통 매핑 정보가 필요할때 사용 : regDate modDate가 공통
@EntityListeners(value = {AuditingEntityListener.class} ) // JPA Entity에 이벤트가 발생할 때 콜백을 처리하고 코드를 실행
@Getter
public abstract class BaseEntity {

    @CreatedDate
    @Column(name = "reg_date", updatable = false)
    private LocalDateTime regDate;

    @LastModifiedDate
    @Column(name = "mod_date")
    private LocalDateTime modDate;
}
