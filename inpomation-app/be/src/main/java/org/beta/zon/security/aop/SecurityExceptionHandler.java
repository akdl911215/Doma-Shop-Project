package org.beta.zon.security.aop;

import lombok.extern.slf4j.Slf4j;
import org.beta.zon.security.domain.Messenger;
import org.beta.zon.security.exception.ErrorCode;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Slf4j // 로그인의 e의 내용을 출력
@ControllerAdvice
public class SecurityExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    protected ResponseEntity<Messenger> hadleRuntimeException(RuntimeException e) {
        log.info("handleRuntimeException : ", e);
        
        Messenger response = Messenger.builder()
                .code("test")
                .message(e.getMessage())
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .build();
        
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(SecurityException.class)
    protected ResponseEntity<Messenger> handleCustomAuthentiocationException(SecurityException e) {
        log.info("handleCustomAuthenticationException : ", e);
        
        Messenger response = Messenger.builder()
                .code(ErrorCode.AUTHENTICATION_FAILED.getCode())
                .message(e.getMessage())
                .status(ErrorCode.AUTHENTICATION_FAILED.getStatus())
                .build();
        
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED); // UNAUTHORIZED : 허가받지 않은
    }
}
