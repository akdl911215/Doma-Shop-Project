package api.betadoma.back.security.aop;

import api.domashop.beta.security.domain.Messenger;
import api.domashop.beta.security.exception.ErrorCode;
import api.domashop.beta.security.exception.LoginRuntimeException;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.nio.file.AccessDeniedException;

@Slf4j // 로그안의 e의 내용을 출력
@ControllerAdvice // 글로벌 예외처리기로 사용, 예외처리기만을 위한 어노테이션은 아니다.
public class SecurityExceptionHandler { // 보안 예외 처리기

    // @ExceptionHandler : Controller 와 RestController만 감시 대상을 한다.
    @ExceptionHandler(RuntimeException.class)
    protected ResponseEntity<Messenger> handleRuntimeException(RuntimeException e){
        log.info("handleRuntimeException", e);

        Messenger response = Messenger.builder()
                .code("test")
                .message(e.getMessage())
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value()) // 500 내부 서버 에러
                .build();

        return  new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(SecurityException.class)
    protected ResponseEntity<Messenger> handleCustomAuthenticationException(SecurityException e) {
        log.info("handleCustomAuthenticationException", e); // 커스텀 처리 인증 예외

        Messenger response = Messenger.builder()
                .code(ErrorCode.AUTHENTICATION_FAILD.getCode())
                .message(e.getMessage())
                .status(ErrorCode.AUTHENTICATION_FAILD.getStatus())
                .build();

        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(LoginRuntimeException.class)
    protected ResponseEntity<Messenger> handleLoginFailException(LoginRuntimeException e){
        log.info("handleLoginFailedException", e);

        Messenger response = Messenger.builder()
                .code(ErrorCode.LOGIN_FAILED.getCode())
                .message(e.getMessage())
                .status(ErrorCode.LOGIN_FAILED.getStatus())
                .build();

        // UNAUTHORIZED : 공인[승인]되지 않은
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(BadCredentialsException.class)
    protected ResponseEntity<Messenger> handleBadCredentialsException(LoginRuntimeException e){
     // 잘못된 자격 증명 예외 처리
        log.info("handleBadCredentialsException", e);

        Messenger response = Messenger.builder()
                .code(ErrorCode.LOGIN_FAILED.getCode())
                .message(e.getMessage())
                .status(ErrorCode.LOGIN_FAILED.getStatus())
                .build();

        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(AccessDeniedException.class)
    protected ResponseEntity<Messenger> handleAccessDeniedException(AccessDeniedException e) {
    // 접근 거부 예외 처리
        log.info("handleAccessDeniedException", e);

        Messenger response = Messenger.builder()
                .code(ErrorCode.ACCESS_DENIED.getCode())
                .message(ErrorCode.ACCESS_DENIED.getMessage())
                .status(ErrorCode.ACCESS_DENIED.getStatus())
                .build();

        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(InsufficientAuthenticationException.class)
    protected ResponseEntity<Messenger> handleInsufficientAuthenticationException(org.springframework.security.access.AccessDeniedException e){
        // 불충분한 인증 예외 처리
        log.info("handleInsufficientAuthenticationException", e);

        Messenger response = Messenger.builder()
                .code(ErrorCode.AUTHENTICATION_FAILD.getCode())
                .message(ErrorCode.AUTHENTICATION_FAILD.getMessage())
                .status(ErrorCode.AUTHENTICATION_FAILD.getStatus())
                .build();

        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

}
