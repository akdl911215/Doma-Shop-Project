package api.betadoma.back.security.service;

import api.betadoma.back.user.domain.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Getter
public class UserDetailsImpl implements UserDetails {

    private final long userid;
    private final String username;
    @JsonIgnore
    private final String password;
    private final String name;
    private final String companyName;
    private final String address;
    private final String email;
    private final String number;
    private final String phoneNumber;
    private final Collection<? extends GrantedAuthority> authorities;

    @Override
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

    public static UserDetailsImpl build(User user){
        List<GrantedAuthority> authories = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getAuthority()))
                .collect(Collectors.toList());
        return new UserDetailsImpl(user.getUserId(), user.getUsername(), user.getPassword(), user.getName(), user.getCompanyName(),
                user.getAddress(), user.getEmail(), user.getNumber(), user.getPhoneNumber(), authories);
    }

}
