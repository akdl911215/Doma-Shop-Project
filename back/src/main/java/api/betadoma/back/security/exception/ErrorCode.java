package api.betadoma.back.security.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum ErrorCode { // enum : 따로 값을 지정해주지 않아도 자동적으로 0부터 시작하는 정수값(컬렉션 인덱싱)이 할당된다.
    AUTHENTICATION_FAILD(401, "AUTH_001", "AUTHENTICATION_FAILED"),
    LOGIN_FAILED(401, "AUTH_002", "LOGIN_FAILED"),
    ACCESS_DENIED(401, "AUTH_003", "ACCESS_DENIED"),
    TOKEN_GENERATION_FAILED(500, "AUTH_005", "TOKEN_GENERATION_FAILED");

    private final int status; // 신분[자격]
    private final String code;
    private final String message;
}
