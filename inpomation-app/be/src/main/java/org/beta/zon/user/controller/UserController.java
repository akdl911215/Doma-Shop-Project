package org.beta.zon.user.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.beta.zon.common.domain.dto.PageRequestDto;
import org.beta.zon.common.domain.dto.PageResultDto;
import org.beta.zon.security.domain.SecurityProvider;
import org.beta.zon.user.domain.dto.UserDto;
import org.beta.zon.user.service.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController // controller + @ResponseBody > 주용도는 JSON 형태로 객체 데이터 반환
@RequestMapping(value = "/users", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
@RequiredArgsConstructor // 자동 주입을 위한 Annotation
@Log4j2
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    private final UserServiceImpl userServiceImpl;
    private final SecurityProvider securityProvider;
    private final PasswordEncoder passwordEncoder;


    @GetMapping("list")
    public ResponseEntity<PageResultDto<UserDto, Object[]>> list(PageRequestDto pageRequestDto) {
        log.info("List ................ " + pageRequestDto);

        return new ResponseEntity(userServiceImpl.getList(pageRequestDto), HttpStatus.OK);
    }

    @PostMapping("/signup")
    @ApiOperation(value = "회원가입 등록", notes = "회원 정보를 등록 합니다") // 요청 URL 에 매핑된 API 에 대한 설명
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access Denied"),
            @ApiResponse(code = 422, message = "Artist - Username is alredy in use")}) // 응답에 대한 설명
    public Map<String, String> signup(@RequestBody UserDto userDto) throws IOException {
        System.out.println("컨트롤러 userDto : "+ userDto);
        userServiceImpl.signup(userDto);

        Map<String, String> resultMap = new HashMap<>();

        return resultMap;
    }

    @PostMapping("/signin")
    @ApiOperation(value = "로그인", notes = "로그인을 시작 합니다")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Somthing went wrong"),
            @ApiResponse(code = 422, message = "Invalid Artist-Username / Password supplied")})
    public ResponseEntity<UserDto> signin(@ApiParam("Signin User") @RequestBody UserDto userDto) throws IOException {
        log.info("User Signin(로그인) 작동 시작 : " + userDto);
            userServiceImpl.signin(userDto);

//        userDto.setToken(securityProvider.createToken(userDto.getUsername(), userDto.getRoles()));

        return ResponseEntity.ok(userDto);
    }

}
