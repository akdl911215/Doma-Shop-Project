package org.beta.zon.security.config.Jwt;

public interface JwtProperties {
    String SECRET = "java";
    Integer EXPIRE_TIME = 1000 * 60 * 60; // 1시간
    String TOKEN_PRIFIX = "Bearer ";
    String TOKEN_HEADER = "Authorization";

    Integer REFRESH_TOKEN_VALIDATION_TIME = 1000 * 60 * 60 * 24 * 7; // 1주일
    String REFRESH_TOKEN_NAME = "refreshToken";
}
