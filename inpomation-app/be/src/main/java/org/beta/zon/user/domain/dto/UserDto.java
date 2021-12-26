package org.beta.zon.user.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component // Bean Configuration 파일에 Bean을 따로 등록하지 않아도 사용 가능
@NoArgsConstructor // 파라미터 없는 생성자 생성
@AllArgsConstructor // 클래스 내에 존재하는 모든 필드에 대한 생성자 생성
@Data
@Builder
@Log4j2
public class UserDto {

    private Long userno;
    private String username;
    private String password;
    private String name;
    private String email;
    private String phoneNumber;
    private String address;

}
