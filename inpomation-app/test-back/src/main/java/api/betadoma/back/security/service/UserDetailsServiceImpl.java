package api.betadoma.back.security.service;

import api.betadoma.back.user.domain.User;
import api.betadoma.back.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor // 초기화되지 않은 final 필드나, @Nonnull 이 붙은 필드에 대해 생성자를 생성
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Transactional
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        // Optional의 객체로 감싼다.
        Optional<User> user = Optional.ofNullable(userRepository.findByUsername(username))
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username : " + username));

        return UserDetailsImpl.build(user.get()); // .get은 Optional 객체에서 끄집어 낸다.
    }
}
