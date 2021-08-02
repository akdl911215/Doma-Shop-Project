package api.betadoma.back.user.service;

import api.betadoma.back.common.domain.PageRequestDTO;
import api.betadoma.back.common.domain.PageResultDTO;
import api.betadoma.back.common.service.AbstractService;
import api.betadoma.back.security.domain.SecurityProvider;
import api.betadoma.back.security.exception.SecurityRuntimeException;
import api.betadoma.back.user.domain.User;
import api.betadoma.back.user.domain.dto.UserDTO;
import api.betadoma.back.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl extends AbstractService<User> implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; // 스프링 시큐리티의 인터페이스 객체
    private final SecurityProvider securityProvider;
    private final AuthenticationManager authenticationManager; // 스프링 시큐리티에서 인증을 담당

    @Override
    public PageResultDTO<UserDTO, User> getList(PageRequestDTO requestDTO) {

        Pageable pageable = requestDTO.getPageable(Sort.by("userId").descending());
        Page<User> result = userRepository.findAll(pageable);
        Function<User, UserDTO> fn = (entity -> entityToDto(entity));

        return new PageResultDTO<>(result, fn);
    }

    @Override
    public UserDTO updateMypage(UserDTO userDTO) {
        log.info("updateMYpage 진입");

        User user = userRepository.getOne(userDTO.getUserId());
        log.info("user : " + user);

        user.changePassword(userDTO.getPassword());
        user.changeCompanyName(userDTO.getCompanyName());
        user.changeCompanyNumber(userDTO.getCompanyNumber());
        user.changeAddress(userDTO.getAddress());
        user.changeEmail(userDTO.getEmail());
        user.changeNumber(userDTO.getNumber());
        user.changePhoneNumber(userDTO.getPhoneNumber());

        userRepository.save(user);
        UserDTO dtoEntity = entityToDto(user);

        return dtoEntity;
    }

    @Transactional
    @Override
    public String signup(UserDTO userDto) {
        log.info("Sign Up ServiceImpl 시작");
        log.info("userDto ::::: "  + userDto);

        try {
            String encodedPassword = passwordEncoder.encode(userDto.getPassword());
            userDto.setPassword(encodedPassword);
            log.info("encodedPassword = " + encodedPassword);

            User entity = dtoToEntity(userDto);
            log.info("entity = " + entity);
            userRepository.save(entity);

            log.info("Sign up ServiceImpl 끝");
            return "Signup Success";
        } catch (Exception e) {
            throw new SecurityRuntimeException("Sign-Up request faild", HttpStatus.UNPROCESSABLE_ENTITY);
            // UNPROCESSABLE_ENTITY : 이 응답은 서버가 요청된 지시를 따를 수 없음을 나타냄
        }
    }

    @Override
    public UserDTO signin(UserDTO userDto) { // httpOnly cookie 으로 설정하기
        log.info("Sign In ServiceImpl 시작");

        try {
            if (userDto.getUsername() != null) {
                log.info("signin-try-if 통과");
                User entity = dtoToEntity(userDto);
                userRepository.signin(entity.getUsername(), entity.getPassword());
                String Token = securityProvider.createToken(entity.getUsername(), userRepository.findByUsername(entity.getUsername()).get().getRoles());
                UserDTO entityDTO = entityToDto(entity);
                entityDTO.setToken(Token);
                log.info("entityDTO :::: " + entityDTO);

                if (!passwordEncoder.matches(userDto.getPassword(), entity.getPassword())){
                    return entityDTO;
                } else {
                    System.out.println("비밀번호를 확인하세요");
                    return null;
                }
            }
            else {
                System.out.println("입력한 ID를 확인하세요");
            }
        } catch (Exception e){

            throw new SecurityRuntimeException("Invalid User-Username / Password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
            // UNPROCESSABLE_ENTITY : 이 응답은 서버가 요청된 지시를 따를 수 없음을 나타냄
        }
        return null;
    }

    @Override
    public String save(User user) {
        userRepository.save(user);

        return (userRepository.save(user) != null) ? "Save Success":"Save Fail";
    }

    @Override
    public Optional<User> findById(Long id) {

        return userRepository.findById(id);
    }

    @Override
    public List<User> findAll() {

        return userRepository.findAll();
    }

    @Override
    public Long count() {

        return userRepository.count();
    }

    @Override
    public Optional<User> getOne(Long id) {
        // .ofNullable = value가 null인 경우 비어있는 Optional을 반환
        return Optional.ofNullable(userRepository.getOne(id));
    }

    @Override
    public String delete(User user) {
        userRepository.delete(user);
        return userRepository.findById(user.getUserId()).orElse(null) == null ? "Suceess" : "Fail";
    }

    @Override
    public Boolean existsById(long id) {
        return userRepository.existsById(id);
    }

    @Override
    public void deleteAll() {

        userRepository.deleteAll();
    }
}