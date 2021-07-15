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

    }
}
