package api.betadoma.back.common.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class HomeController {
    @GetMapping("/")
    public String home() {
        return new SimpleDateFormat("yyyy-MM-dd !!!").format(new Date());
    }

    @GetMapping("/time")
    public String timeCount() {
        Date date_now = new Date(System.currentTimeMillis());
        return "현재 시간 : " + date_now;
    }
}
