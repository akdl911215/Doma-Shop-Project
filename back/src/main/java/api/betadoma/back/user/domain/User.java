package api.betadoma.back.user.domain;


import api.betadoma.back.common.domain.BaseEntity;
import api.betadoma.back.user.domain.role.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class User extends BaseEntity {

    // JPA는 직접할당과 자동생성으로 기본키를 매핑
    @Id // 직접할당
    @GeneratedValue(strategy = GenerationType.IDENTITY) // IDENTITY : 데이터베이스에 위임(MYSQL)
    @Column(name = "user_id", unique = true)
    private Long userId;

    @NotNull
    @Column(name = "username", unique = true)
    private String username;

    @NotNull
    @Column(name = "password")
    private String password;

    @NotNull
    @Column(name = "name")
    private String name;

    @NotNull
    @Column(name = "company_name")
    private String companyName;

    @NotNull
    @Column(name = "company_number") // 사업자 번호
    private String companyNumber;

    @Column(name = "address")
    private String address;

    @NotNull
    @Column(name = "email")
    private String email;

    @NotNull
    @Column(name = "number") // 일반전화
    private String number;

    @Column(name = "phone_number")
    private String phoneNumber;

    @ElementCollection(fetch = FetchType.EAGER)
    List<Role> roles;
}
