package org.beta.zon.user.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.beta.zon.common.service.AbstractService;
import org.beta.zon.user.domain.User;
import org.beta.zon.user.domain.dto.UserDto;
import org.beta.zon.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Transactional
@Log4j2
@RequiredArgsConstructor
@Service
public class UserServiceImpl extends AbstractService<User> implements UserService{

    private final UserRepository userRepository;

    @Override
    public String save(User user) {
        return userRepository.save(user) == null ? "Save Success" : "Save Failed";
    }

    @Override
    public Optional<User> findById(Long userno) {
        return userRepository.findById(userno);
    }

    @Override
    public void modify(UserDto userDto) {

    }

    @Override
    public UserDto signin(UserDto userDto) {
        return null;
    }


    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void deleteById(Long userno) {
        userRepository.deleteById(userno);
    }

    @Override
    public void signup(UserDto userDto) {
        log.info("Signup ServiceImple 시작");
        log.info("userDto : " + userDto);

        User entity = dtoEntity(userDto);
        log.info("entity : " + entity);
        userRepository.save(entity);
        log.info("저장 후 entity : " + entity);
    }

    @Override
    public Long count() {
        return userRepository.count();
    }

    @Override
    public Optional<User> getOne(Long userno) {
        return Optional.ofNullable(userRepository.getOne(userno));
        // ofNullable() 메소드는 명시된 값이 null이 아니면 명시된 값을 가지는
        // Optional 객체를 반환하며, 명시된 값이 null이면 비어있는 Optional 객체를 반환환
    }

    @Override
    public String delete(User user) {
        userRepository.delete(user);
        return userRepository.findById(user.getUserno())
                .orElse(null) == null ?
                "Success" : "Fail";
        // orElse() 해당 값이 null이거나 null이 아니어도 실행
    }

    @Override
    public Boolean existsById(long id) {
        return null;
    }

    @Override
    public void deleteAll() {
        userRepository.deleteAll();
    }
}
