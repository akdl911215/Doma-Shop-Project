package org.beta.zon.security.aop;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.web.servlet.HandlerExceptionResolver;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
public class SecurityAuthenticationEntryPoint implements AuthenticationEntryPoint {
    /*
    * AuthenticationEntryPoint : 인증되지 않았을 경우(비로그인) AuthenticationEntryPoint 부분에서 AuthenticationException
      발생시키면서 비로그인 상태에서 인증실패 시, AuthenticationEntryPoint 로 핸들링 되어 이곳에서 처리
    */

    private final HandlerExceptionResolver handlerExceptionResolver;

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        handlerExceptionResolver.resolveException(request, response, null, authException);
    }
}
