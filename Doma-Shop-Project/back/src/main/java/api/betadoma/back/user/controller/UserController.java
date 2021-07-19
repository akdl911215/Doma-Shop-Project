package api.betadoma.back.user.controller;

import api.betadoma.back.common.domain.PageRequestDTO;
import api.betadoma.back.common.domain.PageResultDTO;
import api.betadoma.back.user.domain.dto.UserDTO;
import api.betadoma.back.user.service.UserServiceImpl;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@Log4j2
@RequestMapping(value = "/users", method = {RequestMethod.GET, RequestMethod.POST})
public class UserController {

    private final UserServiceImpl userService;

    @PutMapping("/mypage")
    @ApiOperation(value = "회원 정보 수정", notes = "선택한 회원 정보를 수정합니다.")
    public ResponseEntity<String> updateMypage(@RequestBody UserDTO userDTO) {
        log.info("회원 정보를 수정합니다");
        userService.updateMypage(userDTO);

        return ResponseEntity.ok("Success Mypage");
    }

    @PostMapping("/signup")
    @ApiOperation(value = "회원가입 등록", notes = "회원 정보를 등록 합니다.")
    public ResponseEntity<String> signup(@RequestBody UserDTO userDto) throws IOException {
        log.info("Sign Up 작동");
        log.info("signup userDto ::: " + userDto);

        return new ResponseEntity<>(userService.signup(userDto), HttpStatus.OK);
    }

    @PostMapping("/signin")
    @ApiOperation(value = "로그인", notes = "로그인을 시작 합니다")
    public ResponseEntity<UserDTO> signin
            (@ApiParam("Signin User") @RequestBody UserDTO userDto) throws IOException {
        log.info("User Siginin 작동 :::: " + userDto);

        return ResponseEntity.ok(userService.signin(userDto));
    }

    @GetMapping("/list/pages")
    public ResponseEntity<PageResultDTO<UserDTO, Object[]>> list(PageRequestDTO page){
        log.info("page : " + page);

        return new ResponseEntity(userService.getList(page), HttpStatus.OK);
    }

//    @GetMapping("/list")
//    @ApiOperation(value = "회원리스트", notes = "리스트를 읽어 옵니다")
//    public ResponseEntity<PageResultDTO<UserDTO, Object[]>> list(PageRequestDTO page) {
//        log.info("page ::: " + page);
//
//        return new ResponseEntity(userService.getList(page), HttpStatus.OK);
//    }


}