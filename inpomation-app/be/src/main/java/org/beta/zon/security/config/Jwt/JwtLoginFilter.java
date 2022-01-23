//package org.beta.zon.security.config.Jwt;
//
//import com.auth0.jwt.JWT;
//import com.auth0.jwt.algorithms.Algorithm;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.beta.zon.security.domain.CMResDto;
//import org.beta.zon.security.service.UserDetailsImpl;
//import org.beta.zon.security.util.CookieUtill;
//import org.beta.zon.security.util.Script;
//import org.beta.zon.user.domain.dto.UserDto;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.Cookie;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.util.Date;
//
//@Slf4j
//@RequiredArgsConstructor
//public class JwtLoginFilter extends UsernamePasswordAuthenticationFilter {
//
//    private final AuthenticationManager authenticationManager;
//    private final CookieUtill cookieUtill;
//
//    @Override
//    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
//        log.info("로그인 요청이 되었습니다.");
//
//        ObjectMapper objectMapper = new ObjectMapper();
//
//        UserDto userDto = null;
//
//        try {
//            userDto = objectMapper.readValue(request.getInputStream(), UserDto.class);
//            log.info("로그인 DTO => {} ", userDto);
//        } catch (IOException e) {
//            e.printStackTrace();
//            log.info("로그인 요청 DTO 생성 중 실패 : " + e.getMessage());
//        }
//
//        // 1. UsernamePassword 토큰을 만들기
//        UsernamePasswordAuthenticationToken authenticationToken =
//                new UsernamePasswordAuthenticationToken(userDto.getUsername(), userDto.getPassword());
//
//        // authenticationManager에게 token을 전달하면, 자동으로 UserDetailsService 가 호출 => 응답을 해준다.
//        Authentication authentication = authenticationManager.authenticate(authenticationToken);
//
//        return authentication;
//    }
//
//    @Override
//    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
//        UserDetailsImpl userDetails = (UserDetailsImpl) authResult.getDetails();
//
//        // JWT는 HEADER:ALGORITHM & TOKEN TYPE 와 PAYLOAD:DATA, VERIFY SIGNATURE 이렇게 세 부분으로 이루어짐.
//        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9                                             // HEADER
//        // .eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ      // PAYLOAD
//        // .SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c                                     // SIGNATURE
//
//        String jwtToekn = JWT.create()
//                .withSubject(userDetails.getUsername())
//                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRE_TIME)) // 토큰의 유효기간 현재시간으로 부터 1시간
//                .withClaim("id", userDetails.getUserno())
//                .withClaim("username", userDetails.getUsername())
//                .sign(Algorithm.HMAC256(JwtProperties.SECRET));
//
//        String jwtRefreshToken = JWT.create()
//                .withSubject(userDetails.getUsername())
//                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.REFRESH_TOKEN_VALIDATION_TIME))
//                .withClaim("id", userDetails.getUserno())
//                .withClaim("username", userDetails.getUsername())
//                .sign(Algorithm.HMAC256(JwtProperties.SECRET));
//
//        Cookie refreshCookie = cookieUtill.createCookie(JwtProperties.REFRESH_TOKEN_NAME, jwtRefreshToken);
//        response.addCookie(refreshCookie);
//        response.addHeader(JwtProperties.TOKEN_HEADER, JwtProperties.TOKEN_PRIFIX + jwtToekn);
//
//        CMResDto cmResDto = new CMResDto(1, userDetails.getUser());
//        Script.responseData(response, cmResDto);
//    }
//    }
//
//
//
