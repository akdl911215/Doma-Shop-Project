package org.beta.zon.security.config.Jwt;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {


    // 특정 조건에서 HTTP 에러코드로 응답해야 하는 경우에 사용.
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        log.info("권한이 없습니다");
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "권한이 없습니다");
    }
}
