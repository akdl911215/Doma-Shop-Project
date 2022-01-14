package org.beta.zon.security.util;

import org.beta.zon.security.config.Jwt.JwtProperties;
import org.springframework.stereotype.Component;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

@Component
public class CookieUtill {

    public Cookie createNullCookie(String cookieName) {
        Cookie cookie = new Cookie(cookieName, null);
        cookie.setHttpOnly(true);
        // 1. document.cookie와 같은 자바스크립트로 쿠키를 조회하는 것을 막는 옵션
        // 2. 브라우저에서 HTTP Only가 설정된 쿠키를 조회할 수 없다.
        // 3. 서버로 HTTP Request 요청을 보낼때만 쿠키를 전송한다.
        // 4. 이를 통해 XSS(Cross Site Scripting) 공격을 차단할 수 있다.

        cookie.setMaxAge(0); // Don`t set to -1 or it will become a session cookie!
        // 쿠키의 유효기간(만료일) 지정
        // 쿠키의 유효기간을 0으로 설정하면 쿠키는 삭제
        // 음수 입력시 브라우저 종료와 함께 사라진다.
        // 유효기간을 지정하지 않으면 브라우저 종료시 제거되도록 기본값 설정

        cookie.setPath("/");
        // path("/") : 웹어플리케이션의 모든 URL 범위에서 전송

        cookie.setSecure(true);
        // Secure Cookie = 웹브라우저와 웹서버가 HTTPS로 통신하는 경우에만 웹브라우저가 쿠키를 서버로 전송하는 옵션

        return cookie;
    }

    public Cookie createCookie(String cookieName, String value) {
        Cookie cookie = new Cookie(cookieName, value);
        cookie.setHttpOnly(true); // 자바스크립트 공격으로부터 안전, xss 공격으로 부터 안전
        cookie.setMaxAge(JwtProperties.REFRESH_TOKEN_VALIDATION_TIME);
        cookie.setPath("/");
        cookie.setSecure(true);
        return cookie;
    }


    // HttpServletRequest : HTTP 서블릿에 대한 요청 정보를 제공하도록 서블릿 Request 인터페이스를 확장
    // 서블릿 컨테이너는 HttpServletRequest 객체를 작성하여 서블릿의 서비스 메서드(doGet, doPost 등)에
    // 인수로 전달한다.
    public Cookie getCookie(HttpServletRequest req, String cookieName) {
        final Cookie[] cookies = req.getCookies();
        if (cookies == null) return null;

        for (Cookie cookie : cookies) {
            if (cookie.getName().equals(cookieName)) return cookie;
        }

        return null;
    }
}
