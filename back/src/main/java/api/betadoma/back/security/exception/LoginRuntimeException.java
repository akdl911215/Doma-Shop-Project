package api.betadoma.back.security.exception;

public class LoginRuntimeException extends RuntimeException { // 실행 예외
    private static final long serialVersionUID = 1L;

    // RuntimeException에서 상속받아 자식 클래스에서 참조중인 참조변수 super()
    public LoginRuntimeException() {
        super(ErrorCode.LOGIN_FAILED.getMessage());
    }

    public LoginRuntimeException(String message) {
        super(message);
    }
}
