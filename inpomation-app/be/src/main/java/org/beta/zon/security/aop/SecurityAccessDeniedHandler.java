package org.beta.zon.security.aop;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.web.servlet.HandlerExceptionResolver;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
public class SecurityAccessDeniedHandler implements AccessDeniedHandler {
    /* AccessDeniedHandler :  Roles 보유에 따른 사용자의 접근 절차 인가(Authorization)에 관한 처리
       인가되지 않은 사용자가 페이지에 접근할 때, 처리 페이지를 다르게 처리하기 위해 사용 */

    private final HandlerExceptionResolver handlerExceptionResolver;


    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        handlerExceptionResolver.resolveException(request, response, null, accessDeniedException);
    }
}
