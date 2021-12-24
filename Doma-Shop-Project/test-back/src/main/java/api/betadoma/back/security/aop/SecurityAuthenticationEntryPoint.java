package api.betadoma.back.security.aop;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.web.servlet.HandlerExceptionResolver;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor // 의존성 주입
public class SecurityAuthenticationEntryPoint implements AuthenticationEntryPoint {// 보안 인증 진입점
    private final HandlerExceptionResolver handlerExceptionResolver;
    // AuthenticationEntryPoint은 인증과정에서 실패하거나 인증헤더(Authorization)를 보내지
    // 않게되는 경우 401(UnAuthorized)라는 응답값을 받게된다.



    @Override // Response에 401이 떨어질만한 에러가 발생할 경우, commence라는 메소드를 실행
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        handlerExceptionResolver.resolveException(request, response, null, authException);
    }

}
