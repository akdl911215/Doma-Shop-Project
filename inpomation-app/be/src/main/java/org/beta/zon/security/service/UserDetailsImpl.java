package org.beta.zon.security.service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.beta.zon.user.domain.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.SpringSecurityCoreVersion;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.*;

@RequiredArgsConstructor
@Getter
public class UserDetailsImpl implements UserDetails { // UserDetails 은 security 내장형

    private User user;

    private final Long userno;
    private final String username;
    @JsonIgnore // 데이터를 주고 받을 때 해당 데이터는 'Ignore'처리.
    private final String password;
    private final String name;
    private final String email;
    private final String phoneNumber;
    private final String address;
    private final boolean fromSocial;
    private final Collection<? extends GrantedAuthority> authorities;


//    private final Set<GrantedAuthority> authorities;

//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return authorities;
//    }


//    public UserDetailsImpl(User user) {
//        this.user = user;
//    }

//    public UserDetailsImpl(User user, Map<String, Object> attributes) {
//        this.user = user;
//        this.attributes = attributes;
//    }

    // 계정이 만료되지 않았을경우
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    // 계정이 잠기지 않았을 경우
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    // 자격증명이 만료되지 않았을 경우
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    // 사용될 경우
    @Override
    public boolean isEnabled() {
        return true;
    }

    private static class AuthorityComparator implements Comparator<GrantedAuthority>, Serializable {
        private static final long serialVersionUID = SpringSecurityCoreVersion.SERIAL_VERSION_UID;

        @Override
        public int compare(GrantedAuthority o1, GrantedAuthority o2) {
            if (o1.getAuthority() == null) {
                return -1;
            }

            if (o2.getAuthority() == null) {
                return 1;
            }

            return o1.getAuthority().compareTo(o2.getAuthority());
        }
    }

    public static UserDetailsImpl build(User user) {
//        List<GrantedAuthority> authorities = user.getRoles().stream()
//                .map(role -> new SimpleGrantedAuthority(role.getAuthority()))
//                .collect(Collectors.toList());
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>((Collection<? extends GrantedAuthority>) new AuthorityComparator());

        return new UserDetailsImpl(user.getUserno(), user.getUsername(), user.getPassword(), user.getName(),
                user.getEmail(), user.getPhoneNumber(), user.getAddress(), user.isFromSocial(), authorities);
    }
}
