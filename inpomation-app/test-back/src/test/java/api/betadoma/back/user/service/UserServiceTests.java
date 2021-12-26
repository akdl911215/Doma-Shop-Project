package api.betadoma.back.user.service;

import api.betadoma.back.common.domain.PageRequestDTO;
import api.betadoma.back.common.domain.PageResultDTO;
import api.betadoma.back.user.domain.User;
import api.betadoma.back.user.domain.dto.UserDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;


@SpringBootTest
public class UserServiceTests {

    @Autowired
    private UserService userService;

    @Transactional
    @Commit
    @Test
    public void testList() {
        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .page(1)
                .size(10)
                .build();

        PageResultDTO<UserDTO, User> resultDTO = userService.getList(pageRequestDTO);

        for (UserDTO userDTO : resultDTO.getDtoList()) {
            System.out.println(userDTO);
        }
    }

    @Transactional
    @Commit
    @Test
    public void testList2() {
        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .page(1)
                .size(10)
                .build();

        PageResultDTO<UserDTO, User> resultDTO = userService.getList(pageRequestDTO);

        System.out.println("PREV : " + resultDTO.isPrev());
        System.out.println("NEXT : " + resultDTO.isNext());
        System.out.println("TOTAL : " + resultDTO.getTotalPage());

        System.out.println("---------------------------------------");
        for (UserDTO userDTO : resultDTO.getDtoList()) {
            System.out.println(userDTO);
        }

        System.out.println("---------------------------------------");
        resultDTO.getPageList().forEach(i -> System.out.println(i));

        for (UserDTO userDTO : resultDTO.getDtoList()) {
            System.out.println(userDTO);
        }
    }
}
