package org.beta.zon.security.dto;

import lombok.Getter;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Log4j2
@Getter
@Service
@ToString
public class UserAuthMemberDTO extends User {

    private Long userno;
    private String username;
    private String password;
    private String name;
    private String email;
    private String phoneNumber;
    private String address;
    private boolean fromSocial;

    public UserAuthMemberDTO(String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.username = username;
        this.fromSocial = fromSocial;

    }
}
