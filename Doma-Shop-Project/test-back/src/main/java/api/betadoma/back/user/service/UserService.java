package api.betadoma.back.user.service;

import api.betadoma.back.common.domain.PageRequestDTO;
import api.betadoma.back.common.domain.PageResultDTO;
import api.betadoma.back.user.domain.User;
import api.betadoma.back.user.domain.dto.UserDTO;

public interface UserService {

    String signup(UserDTO userDto);
    UserDTO signin(UserDTO userDto);
    PageResultDTO<UserDTO, User> getList(PageRequestDTO requestDTO);
    UserDTO updateMypage(UserDTO userDTO);
    UserDTO userWithdrawal(UserDTO userDTO);

    default User dtoToEntity(UserDTO userDto){
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

    default UserDTO entityToDto(User user){
        UserDTO entityDto = UserDTO.builder()
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