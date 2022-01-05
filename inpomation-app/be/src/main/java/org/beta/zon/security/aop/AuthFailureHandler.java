package org.beta.zon.security.aop;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Configuration
public class AuthFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        // request 에서 getParameter를 사용하여 "username"에 대한 정보를 가져올 수 있다.
        String username = request.getParameter("username");

        // 로그인 실패 시 처리할 내용을 작성하여 확장할 수 있다.

        // 응답으로 리다이렉트를 보낸다.
        response.sendRedirect("/users/signin");

        // https://hooongs.tistory.com/235
    }
}
