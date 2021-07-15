package api.betadoma.back.user.domain.role;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import java.util.Arrays;

@RequiredArgsConstructor
@Getter
public enum Role implements GrantedAuthority {

    ADMIN("ROLE_ADMIN", "관리자권한"),
    USER_ROLES("ROLE_USER", "유저권한");

    private final String code;
    private final String description;

    public static Role of(String code){
        return Arrays.stream(Role.values())
                .filter(i -> i.getCode().equals(code))
                .findAny().get();
    }

    @Override
    public String getAuthority() {
        return name();
    }
}