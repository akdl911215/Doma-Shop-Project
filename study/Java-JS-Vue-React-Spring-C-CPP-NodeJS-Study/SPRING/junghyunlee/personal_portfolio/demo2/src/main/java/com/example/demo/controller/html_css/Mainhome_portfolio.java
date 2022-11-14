package com.example.demo.controller.html_css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(value = "/")
public class Mainhome_portfolio {
    public static Logger log =
            LoggerFactory.getLogger(Mainhome_portfolio.class);

    @GetMapping("/home")
    public String getHome() {
        log.info("getHome()");

        return "html_css/portfolio/mainPortfol";
    }

    @GetMapping("/mainPortfoiloTest")
    public String getMainPortfoiloTest() {
        log.info("Enter getMainPortfoiloTest()");

        return "html_css/portfolio/mainPortfoiloTest.html";
    }

    @GetMapping("/mainPortfol")
    public String getMainPortfol() {
        log.info("Enter getMainPortfol()");

        return "html_css/portfolio/mainPortfol.html";
    }
}
