package org.beta.zon.security.config;

import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@Log4j2
public class SecurityConfig2 extends WebSecurityConfigurerAdapter {
    // SecuityConfig 클래스는 시큐리티 관련 기능을 쉽게 설정하기 위해서 WebSecurityConfigurerAdapter 클래스를 상속 처리
    // WebSecurityConfigurerAdapter 클래스는 주로 override를 통해 여러 설정을 조절

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        super.configure(http);

        http.authorizeRequests()
                .antMatchers("/users/signin").permitAll()
                .antMatchers("/users/signinMember").hasRole("MEMBER") // 일반 회원
                .antMatchers("/users/signinManager").hasRole("MANAGER") // 중간 관리 회원
                .antMatchers("/users/signinAdmin").hasRole("ADMIN") // 총괄 관리자
        ;
        http.formLogin(); // 인가/인증에 문제시 로그인 화면
        http.csrf().disable(); // csrf 기능 비활성화
        http.logout(); // SecurityConfig에 logout() 적용하는 로그아웃 처리 기능
    }


}
