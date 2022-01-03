package org.beta.zon.security.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.beta.zon.security.aop.SecurityFilter;
import org.beta.zon.security.domain.SecurityProvider;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
public class SecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
    private final SecurityProvider provider;

    @Override
    public void configure(HttpSecurity http) throws Exception {
        SecurityFilter filter = new SecurityFilter(provider);
        // addFilterBefore() : 지정된 필터 앞에 커스텀 필터를 추가(UsernamePasswordAuthenticationFilter 보다 먼저 실행)
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
    }
}