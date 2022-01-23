//package org.beta.zon.security.config.Jwt;
//
//import com.auth0.jwt.JWT;
//import com.auth0.jwt.algorithms.Algorithm;
//import lombok.extern.slf4j.Slf4j;
//import org.beta.zon.security.domain.SecurityProvider;
//import org.beta.zon.security.exception.UserNotFoundException;
//import org.beta.zon.user.domain.User;
//import org.beta.zon.user.repository.UserRepository;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//import java.io.IOException;
//
//@Slf4j
//public class JWTAuthorizationFilter extends BasicAuthenticationFilter {
//
//    private final UserRepository userRepository;
//    private final HttpSession session;
//
//    public JWTAuthorizationFilter(AuthenticationManager authenticationManager, UserRepository userRepository, HttpSession session) {
//        super(authenticationManager);
//        this.userRepository = userRepository;
//        this.session = session;
//
//    }
//
//
//        @Override
//        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
//        log.info("request => {}" + request);
//        log.info("response => {}" + response);
//        log.info("chain => {}" + chain);
//
//        log.info("시큐리티 사용시 권한이 필요한 요청이 들어옵니다");
//        log.info("JwtProperties.TOKEN_HEADER => {}" , JwtProperties.TOKEN_HEADER);
////        log.info("request.getHeader(JwtProperties.TOKEN_HEADER) => {}", request.getHeader(JwtProperties.TOKEN_HEADER));
//
////        log.info("request.getHeaders( JwtProperties.TOKEN_HEADER) => {}", request.getHeaders(JwtProperties.TOKEN_HEADER));
////        log.info("request.getHeader(JwtProperties.TOKEN_HEADER) => {}", request.getHeader(JwtProperties.TOKEN_HEADER));
//
//
//        String header = request.getHeader(JwtProperties.TOKEN_HEADER);
////        String header = request.getHeader("Authorization");
//        log.info("token => {} ", header);
//        log.info("header.startsWith(JwtProperties.TOKEN_PRIFIX) => {}", JwtProperties.TOKEN_PRIFIX);
//
//        // startsWith() : 대상 문자열이 특정 문자 또는 문자열로 시작되는지 여부를 확인하고 boolean 값으로 리턴
//        if(header == null || header.startsWith(JwtProperties.TOKEN_PRIFIX)){
//            log.info("check!");
//            chain.doFilter(request, response);
//            return;
//        }
//
//        String token = header.replace(JwtProperties.TOKEN_PRIFIX, "");
//        Long userno = JWT.require(Algorithm.HMAC256(JwtProperties.SECRET))
//                .build().verify(token).getClaim("id").asLong();
//        log.info("userno => {} ", userno);
//
//
//        // 보안을 위한 토큰 추가적으로 하기
//        //https://www.bezkoder.com/spring-boot-react-jwt-auth/
//        //https://cheese10yun.github.io/spring-oauth2-provider/
//
//        if (userno != null) {
//            log.info("토큰 가져오기 성공");
//
//            User user = userRepository.findById(userno).orElseThrow(() -> {
//                return new UserNotFoundException("유저 정보를 찾을 수 없습니다");
//            });
//
////            UserDetailsImpl userDetails = new UserDetailsImpl(user.getUserno(), user.getUsername(),
////                    user.getPassword(), user.getName(), user.getAddress(), user.getPhoneNumber(), user.getEmail(),
////                    user.isFromSocial(), user.getAuthorities());
//
////            Authentication authentication = new UsernamePasswordAuthenticationToken(
////                    userDetails,
////                    userDetails.getPassword(),
////                    userDetails.getAuthorities()
////            );
////            SecurityContextHolder.getContext().setAuthentication(authentication); // 인증 완료
//        }
//
//        chain.doFilter(request, response);
//    }
//}
