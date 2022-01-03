package org.beta.zon.security.exception;

public class LoginRuntimeException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    // super() : 부모 클래스로부터 상속받은 필드나 메소드를 자식 클래스에서 참조하는 데 사용하는 참조 변수
    public LoginRuntimeException() {
        super(ErrorCode.LOGIN_FAILED.getMessage());
    }

    public LoginRuntimeException(String message) {
        super(message);
    }
}
