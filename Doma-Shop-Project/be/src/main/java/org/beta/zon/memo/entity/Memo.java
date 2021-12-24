package org.beta.zon.memo.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "tbl_memo") // @Entity와 같이 사용가능. 데이터베이스상에서 엔티티 클래스로 생성하 것인지
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Memo {

    @Id // @Entity가 붙은 클래스는 Primary Key에 해당하는 특정 필드를 @Id로 지정해야한다.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // @Id가 사용자가 입력하는 값을 사용하는 경우가 아니면 자동으로 생성되는 번호를 사용하기 위해 @GeneratedValue 어노테이션 활용
    // IDENTITY - 사용하는 데이터베이스가 키 생성을 결정 MySql이나 MariaDB의 경우 auto increment 방식을 이용
    private Long mno;

    @Column(length = 200, nullable = false)
    private String memoText;
}
