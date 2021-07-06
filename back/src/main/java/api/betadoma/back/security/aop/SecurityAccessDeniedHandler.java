package api.betadoma.back.security.aop;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.web.servlet.HandlerExceptionResolver;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@RequiredArgsConstructor
public class SecurityAccessDeniedHandler implements AccessDeniedHandler {
    private final HandlerExceptionResolver handlerExceptionResolver;
    // HandlerExceptionResolver : 전역 에러를 처리하기 위해 servlet(webmvc)에서 사용되고 제공되는 interface
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        handlerExceptionResolver.resolveException(request, response, null, accessDeniedException);
        // resolveException() 의 리턴 타입은 ModelAndView
        // 예외에 따라서 사용할 뷰와 그 안에 들어갈 내용을 담은 모델을 돌려준다.
        // 만약 처리 불가능한 예외라면 null을 리턴한다
    }
}
