package api.betadoma.back.security.config;

import api.betadoma.back.security.aop.SecurityFilter;
import api.betadoma.back.security.domain.SecurityProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// SecurityConfigurerAdapter : SecurityConfigurer를 사용하고 구성중인 SecurityBuilder에 액세스 할 수 있도로 한다.
@RequiredArgsConstructor
public class SecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
    private final SecurityProvider provider;

    @Override
    public void configure(HttpSecurity http) throws Exception {
        SecurityFilter securityFilter = new SecurityFilter(provider);
        http.addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class);

//        http
//                .cors().disable() // cors방지 // 교차 출처 리소스 공유(Cross-Origin Resource Sharing) : 추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제이다. 웹은 리소스가 자신의 출처와 다를 때 교차 출처 HTTP 요청을 실행한다.
//                .csrf().disable() // csrf방지 // Cross-Site Request Forgery (사이트 간 요청 위조) : 웹 애플리케이션 취약점 중 하나로 사용자가 자신의 의지와 무관하게 공격자가 의동한 해동을 해서 특정 웹페이지를 보안에 취약하게 한다거나 수정, 삭제 등의 작업을 하게 만드는 공격 방법
//                .formLogin().disable() // 기본 로그인 페이지 없애기
//                .headers().frameOptions().disable();
    }


}
