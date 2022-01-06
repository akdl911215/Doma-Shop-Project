package org.beta.zon.user.domain.dto;

import lombok.*;
import lombok.extern.log4j.Log4j2;
import org.beta.zon.user.domain.role.Role;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

//@Data
@Component // Bean Configuration 파일에 Bean을 따로 등록하지 않아도 사용 가능
@NoArgsConstructor // 파라미터 없는 생성자 생성
@AllArgsConstructor // 클래스 내에 존재하는 모든 필드에 대한 생성자 생성
@Getter
@Builder
@Log4j2
public class UserDto  {

    private Long userno;
    private String username;
    private String password;
    private String name;
    private String email;
    private String phoneNumber;
    private String address;
    private boolean fromSocial;
    private List<Role> roles;
    private String token;
    private boolean loginSuccessOrNot;

    public boolean getLoginSuccessOrNot(boolean loginSuccessOrNot) {
        return loginSuccessOrNot;
    }

    public String getPassword(String password) {
        return password;
    }

    public String getName(String name) {
        return name;
    }

    public String getEmail(String email) {
        return email;
    }

    public String getPhoneNumber(String phoneNumber) {
        return phoneNumber;
    }

    public String getAddress(String address) {
        return address;
    }

    public boolean getFromSocial(boolean fromSocial) { return fromSocial; }

    public void setToken(String token) {
        this.token = token;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setLoginSuccessOrNot(boolean loginSuccessOrNot) {
        this.loginSuccessOrNot = loginSuccessOrNot;
    }

}
