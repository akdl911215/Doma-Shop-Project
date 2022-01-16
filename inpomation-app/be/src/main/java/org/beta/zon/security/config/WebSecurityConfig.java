package org.beta.zon.security.config;

import lombok.RequiredArgsConstructor;
import org.beta.zon.security.config.Jwt.*;
import org.beta.zon.security.domain.SecurityProvider;
import org.beta.zon.security.util.CookieUtill;
import org.beta.zon.user.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import springfox.documentation.swagger2.mappers.ModelMapper;

import javax.servlet.http.HttpSession;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    private final SecurityProvider provider;
    private final CookieUtill cookieUtill;
    private final UserRepository userRepository;
    private final HttpSession httpSession;

    // 암호화에 필요한 PasswordEncoder를 Bean 등록한다.
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
//    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService());
        auth.eraseCredentials(false);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .headers().disable()
                .csrf().disable() // crsf 보안 토큰 disable 처리
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(jwtLoginFilter())
                .addFilter(new JWTAuthorizationFilter(authenticationManager(), userRepository, httpSession))
                .exceptionHandling()
                .authenticationEntryPoint(new JwtAuthenticationEntryPoint())
                .accessDeniedHandler(new JwtAceessDeniedHandler())
                .and()
                .authorizeRequests() // 요청에 대한 사용권한 체크
//                .antMatchers("/users/**").hasRole("USER")
                .antMatchers("/users/**").permitAll()
                .antMatchers("/admins/**").hasRole("ADMIN")
                .antMatchers("/managers/**").hasRole("MANAGER")
                .anyRequest().permitAll(); // 그 외 나머지 요청은 누구나 접근 가능
//                .and()
//                .addFilterBefore(new SecurityFilter(provider), // 지정된 필터 앞에 커스텀 필터를 추가 (UsernamePasswordAuthenticationFilter 보다 먼저 실행
//                        UsernamePasswordAuthenticationFilter.class)
//                .addFilter(jwtLoginFilter());
                // SecurityFilter를 UsernamePAsswordAuthenticationFilter 전에 넣는다.

//        http
//                .headers().httpStrictTransportSecurity()
//                .maxAgeInSeconds(0)
//                .includeSubDomains(true)
//                ;

//        http.exceptionHandling().accessDeniedPage("/signin"); // 원래 login인데 signin으로 수정해봄
//        http.apply(new SecurityConfig(provider));
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        super.configure(web);

        web.ignoring()
                .antMatchers(HttpMethod.OPTIONS, "/*/**") // 모든 곳에서 접속
                .antMatchers("/", "/h2-console/**");
    }

    @Bean
    public JwtLoginFilter jwtLoginFilter() throws Exception {

        final JwtLoginFilter jwtLoginFilter = new JwtLoginFilter(authenticationManager(), cookieUtill);
        jwtLoginFilter.setFilterProcessesUrl("/signin");
        jwtLoginFilter.setAuthenticationManager(authenticationManager());

        jwtLoginFilter.setAuthenticationSuccessHandler(new JwtLoginSuccessHandler());
        jwtLoginFilter.setAuthenticationFailureHandler(new JwtLoginFailureHandler());

        return jwtLoginFilter;
    }
}

