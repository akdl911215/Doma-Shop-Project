package org.beta.zon.security.service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.beta.zon.user.domain.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Getter
public class UserDetailsImpl implements UserDetails { // UserDetails 은 security 내장형

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

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public static UserDetailsImpl build(User user) {
        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getAuthority()))
                .collect(Collectors.toList());

        return new UserDetailsImpl(user.getUserno(), user.getUsername(), user.getPassword(), user.getName(),
                user.getEmail(), user.getPhoneNumber(), user.getAddress(), user.isFromSocial(), authorities);
    }
}
