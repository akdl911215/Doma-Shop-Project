package org.beta.zon.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

    @GetMapping("/hello")
    public String[] hello() {
        return new String[]{"Hello", "World"};
    }

//    @GetMapping("/")
//    public String[] hello2() {
//        return new String[]{"Hello", "World"};
//    }
}
