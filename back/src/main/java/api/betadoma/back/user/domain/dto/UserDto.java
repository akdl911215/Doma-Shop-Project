package api.betadoma.back.user.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Log4j2
public class UserDTO {

    private Long userId;
    private String username;
    private String password;
    private String name;
    private String companyName;
    private String companyNumber;
    private String address;
    private String email;
    private String number;
    private String phoneNumber;
}
