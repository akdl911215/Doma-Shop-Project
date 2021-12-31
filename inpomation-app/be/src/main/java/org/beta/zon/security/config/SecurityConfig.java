package org.beta.zon.security.config;

import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@Log4j2
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    // SecuityConfig 클래스는 시큐리티 관련 기능을 쉽게 설정하기 위해서 WebSecurityConfigurerAdapter 클래스를 상속 처리
    // WebSecurityConfigurerAdapter 클래스는 주로 override를 통해 여러 설정을 조절

}
