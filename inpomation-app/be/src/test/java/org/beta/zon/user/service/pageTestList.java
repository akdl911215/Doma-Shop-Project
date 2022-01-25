package org.beta.zon.user.service;

import org.beta.zon.common.domain.dto.PageRequestDto;
import org.beta.zon.common.domain.dto.PageResultDto;
import org.beta.zon.user.domain.User;
import org.beta.zon.user.domain.dto.UserDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class pageTestList {

    @Autowired
    UserServiceImpl userService;


    @Test
    public void testList2() {
        PageRequestDto pageRequestDto = PageRequestDto.builder().page(1).size(10).build();
        PageResultDto<UserDto, User> resultDto = userService.getList(pageRequestDto);

        System.out.println("PREV : " + resultDto.isPrev());
        System.out.println("NEXT : " + resultDto.isNext());
        System.out.println("TOTAL : " + resultDto.getTotalPage());

        System.out.println("-------------------------------------------------");
        for (UserDto userDto : resultDto.getDtoList()) {
            System.out.println(userDto);
        }
        System.out.println("-------------------------------------------------");
        resultDto.getPageList().forEach(i -> System.out.println(i));
    }


    @Test
    public void testList() {
        PageRequestDto pageRequestDto = PageRequestDto.builder().page(1).size(10).build();
        PageResultDto<UserDto, User> resultDto = userService.getList(pageRequestDto);

        for (UserDto userDto : resultDto.getDtoList()){
            System.out.println("#### " + userDto);
        }
    }

}
