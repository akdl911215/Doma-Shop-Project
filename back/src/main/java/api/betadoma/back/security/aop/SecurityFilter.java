package api.betadoma.back.security.aop;

import api.domashop.beta.security.domain.SecurityProvider;
import api.domashop.beta.security.exception.SecurityRuntimeException;
import lombok.RequiredArgsConstructor;
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
    // OncePerRequestFilter : 같은 요청에 대해 단 한번만 처리가 수행되는 것을 보장하는 기본 클래스

    private final SecurityProvider securityProvider;

    // doFilterInternal는 OncePerRequestFilter 상속받아서 사용
    // 이미 필터링이된 요청은 다시 필터링을 하지않고 진행하게 한다.
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = securityProvider.resolveToken(request); // Request로 들어오는 Jwt Token의 유효성을 검증하는 filter를 filterChain에 등록
        try {
            if (token != null && securityProvider.validateToken(token)) { // validate : 입증하다
                Authentication auth = securityProvider.getAuthentication(token);
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
