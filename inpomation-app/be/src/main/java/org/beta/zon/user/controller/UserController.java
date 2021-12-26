package org.beta.zon.user.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController // controller + @ResponseBody > 주용도는 JSON 형태로 객체 데이터 반환
@RequiredArgsConstructor
@Log4j2
@RequestMapping(value = "/users", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
public class UserController {

}
