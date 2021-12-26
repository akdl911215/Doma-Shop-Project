package org.beta.zon.user.service;

import org.beta.zon.user.domain.User;
import org.beta.zon.user.domain.dto.UserDto;

import java.util.List;

public interface UserService {

    void modify(UserDto userDto);
    UserDto signin(UserDto userDto);
    List<User> findAll();
    void deleteById(Long userno);

}
