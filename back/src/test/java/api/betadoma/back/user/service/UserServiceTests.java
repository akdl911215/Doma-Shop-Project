package api.betadoma.back.user.service;

import api.betadoma.back.common.domain.PageRequestDTO;
import api.betadoma.back.common.domain.PageResultDTO;
import api.betadoma.back.user.domain.User;
import api.betadoma.back.user.domain.dto.UserDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;


@SpringBootTest
public class UserServiceTests {

    @Autowired
    private UserService userService;

    @Commit
    @Test
    public void testList() {
        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .page(1)
                .size(10)
                .build();

        PageResultDTO<UserDTO, User> resultDTO = sv.getList(pageRequestDTO);

        for (UserDTO userDTO : resultDTO.getDtoList()) {
            System.out.println(userDTO);
        }
    }
}
