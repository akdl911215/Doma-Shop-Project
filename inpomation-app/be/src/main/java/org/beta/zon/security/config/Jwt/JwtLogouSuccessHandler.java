//package org.beta.zon.security.config.Jwt;
//
//import lombok.extern.slf4j.Slf4j;
//import org.beta.zon.security.domain.CMResDto;
//import org.beta.zon.security.util.CookieUtill;
//import org.beta.zon.security.util.Script;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
//
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@Slf4j
//public class JwtLogouSuccessHandler implements LogoutSuccessHandler {
//
//    private final CookieUtill cookieUtill;
//
//    public JwtLogouSuccessHandler(CookieUtill cookieUtill) {
//        this.cookieUtill = cookieUtill;
//    }
//
//    @Override
//    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
//        log.info("로그아웃이 정상적으로 작동");
//
//        CMResDto cmResDto = new CMResDto(1, "로그아웃"); // 1 : Success
//        Script.responseData(response, cmResDto);
//
//    }
//}
