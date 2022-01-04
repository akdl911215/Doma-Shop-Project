package org.beta.zon.security.aop;

import lombok.RequiredArgsConstructor;
import org.beta.zon.security.domain.SecurityProvider;
import org.beta.zon.security.exception.SecurityRuntimeException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
public class SecurityFilter extends OncePerRequestFilter {

    private final SecurityProvider provider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        // 헤더에서 JWT를 받아온다.
        String token = provider.resolveToken(request);

        try {
            // 유효한 토큰인지 확인한다.
            if (token != null && provider.validateToken(token)) {
                // 토큰이 유효하면 토큰으로부터 유저 정보를 받아온다.
                Authentication auth = provider.getAuthentication(token);
                // SecurityContext 에 Authentication 객체를 저장한다.
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        } catch (SecurityRuntimeException e) {
            SecurityContextHolder.clearContext();
            response.sendError(e.getHttpStatus().value(), e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
        filterChain.doFilter(request, response);

    }
}
