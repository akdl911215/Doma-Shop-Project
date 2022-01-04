package org.beta.zon.security.service;

import lombok.RequiredArgsConstructor;
import org.beta.zon.user.domain.User;
import org.beta.zon.user.repository.UserRepository;
import org.hibernate.annotations.ColumnTransformer;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailServiceImpl implements UserDetailsService {
    private final UserRepository userRepository;

    @ColumnTransformer
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> user = Optional.ofNullable(userRepository.findByUsername(username))
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username : " + username));

        return UserDetailsImpl.build(user.get());

        // webfirewood.tistory.com/115
        // SpringSecurity는 UserDetails 객체를 통해 권한 정보를 관리하기 때문에 User 클래스에 UserDetails 를 구현하고 추가 정
    }
}
