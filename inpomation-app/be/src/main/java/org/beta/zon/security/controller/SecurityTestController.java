package org.beta.zon.security.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Log4j2
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/securitytest/")
public class SecurityTestController {

    @GetMapping("/all") // 로그인 하지 않아도 사용자도 접근 가능
    public void exAll() {
        log.info("exAll....");
    }

    @GetMapping("/member") // 로그인한 사용자만이 접근 가능
    public void exMember() {
        log.info("exMember....");
    }

    @GetMapping("/admin") // 관리자(admin) 권한이 있는 사용자만이 접근
    public void exAdmin() {
        log.info("exAdmin........");
    }
}
