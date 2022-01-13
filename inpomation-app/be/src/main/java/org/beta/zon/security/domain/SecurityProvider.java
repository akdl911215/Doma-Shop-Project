package org.beta.zon.security.domain;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.beta.zon.security.service.UserDetailServiceImpl;
import org.beta.zon.user.domain.role.Role;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Log4j2
@RequiredArgsConstructor
@Component
public class SecurityProvider implements AuthenticationProvider {

    @Value("${security.jwt.token.secret-key:secret-key}")
    private String secretKey;

    @Value("${security.jwt.token.expire-length:3600000}")
    private long validityInMilliseconds = 3600000; //1h

    private final UserDetailServiceImpl service;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        return null;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return false;
    }

    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(String username, Role roles) {
        log.info("username : "+username);
        log.info("roles : "+roles);

        Claims claims = Jwts.claims().setSubject(username); // JWT payload에 저장되는 정보 단위
        log.info("claims : "+claims);

//        claims.put("auth", roles.stream().map(se -> new SimpleGrantedAuthority(se.getAuthority()))
//                .filter(Objects::nonNull).collect(Collectors.toList())); // 정보는 key / value 쌍으로 저장
        claims.put("auth", roles.getAuthority());
        log.info("밑 claims : "+claims);

        Date now = new Date();
        log.info("now : "+now);
        Date validaty = new Date(now.getTime() + validityInMilliseconds);
        log.info("validaty : "+validaty);

        return Jwts.builder()
                .setClaims(claims) // 정보 저장
                .setIssuedAt(now) // 토큰 발행 시간 정보
                .setExpiration(validaty) // set Expire Time
                .signWith(SignatureAlgorithm.HS256, secretKey) // 사용할 암호화 알고리즘과 signature에 들어갈 secret값 세팅
                .compact();
    }

    public String getUsername(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    // JWT 토큰에서 인증 정보 조회
    public Authentication getAuthentication(String token) {
        UserDetails userDetails = service.loadUserByUsername(getUsername(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    // HttpServletRequest에서 token 값을 가져옴. "Authorization" : "TOKEN값"
    public String resolveToken(HttpServletRequest req) {
        String bearerToken = req.getHeader("Authorization");

        // startsWith() : 어떤 문자열이 특정 문자로 시작하는지 확인하여 boolean으로 반환
        if (bearerToken != null && bearerToken.startsWith("Bearer")) {
            return bearerToken.substring(7); // 예상 결과는 zation
        }

        return null;
    }

    // 토큰의 유효성 + 만료일자 확인
    public boolean validateToken(String token) throws Exception {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            throw new Exception();
        }
    }

    // 토큰에서 회원 정보 추출
    public String getUserPk(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }



}
