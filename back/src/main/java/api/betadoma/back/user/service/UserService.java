package api.betadoma.back.user.service;

import api.betadoma.back.user.domain.User;
import api.betadoma.back.user.domain.dto.UserDto;

public interface UserService {

    String signup(UserDto userDto);
    UserDto signin(UserDto uSerDto);

    default User dtoToEntity(UserDto userDto){
        User entity = User.builder()
                .userId(userDto.getUserId())
                .username(userDto.getUsername())
                .password(userDto.getPassword())
                .name(userDto.getName())
                .companyName(userDto.getCompanyName())
                .companyNumber(userDto.getCompanyNumber())
                .address(userDto.getAddress())
                .email(userDto.getEmail())
                .number(userDto.getNumber())
                .phoneNumber(userDto.getPhoneNumber())
                .build();

        return entity;
    }

    default UserDto entityToDto(User user){
        UserDto entityDto = UserDto.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
                .companyName(user.getCompanyName())
                .companyNumber(user.getCompanyNumber())
                .address(user.getAddress())
                .email(user.getEmail())
                .number(user.getNumber())
                .phoneNumber(user.getPhoneNumber())
                .build();

        return entityDto;
    }
}