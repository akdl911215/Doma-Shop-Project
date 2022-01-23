//package org.beta.zon.security.config.Jwt;
//
//import lombok.extern.slf4j.Slf4j;
//import org.beta.zon.security.domain.CMResDto;
//import org.beta.zon.security.util.Script;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.web.authentication.AuthenticationFailureHandler;
//
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@Slf4j
//public class JwtLoginFailureHandler implements AuthenticationFailureHandler {
//
//    @Override
//    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
//        log.info("로그인 인증에 실패");
//        CMResDto cmResDto = new CMResDto(0, null);
//        Script.responseData(response, cmResDto);
//    }
//}
