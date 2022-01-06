package org.beta.zon.security.service;

import lombok.RequiredArgsConstructor;
import org.beta.zon.user.domain.User;
import org.beta.zon.user.repository.UserRepository;
import org.hibernate.annotations.ColumnTransformer;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailServiceImpl implements UserDetailsService {
    private final UserRepository userRepository;

//    @ColumnTransformer
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> user = Optional.ofNullable(userRepository.findByUsername(username))
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username : " + username));

        return UserDetailsImpl.build(user.get());
    }
}
