package com.example.demo.controller.resume_portfoilo;

import com.example.demo.entity.TestMember;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/Resume")
public class ResumeController_portfolio {
    private static final Logger log =
            LoggerFactory.getLogger(ResumeController_portfolio.class);

    @GetMapping("/home")
    public String getHome() {
        log.info("getHome()");

        return "html_css/portfolio/mainPortfol";
    }

    @GetMapping("/personalPortfolio")
    public String getPersonalPortfolio(Model model) throws Exception {
        log.info("getPersonalPortfolio()");

        //model.addAttribute("list", service.list());

        return "spring/real_board/personalPortfolio";
    }


    @RequestMapping(value = "/home",
            method = RequestMethod.GET, params = "register")
    public String getRegisterForm(Model model) {
        log.info("/home?register");


        return "spring/real_board/personalPortfolio";
    }


    @RequestMapping(value = "/home",
            method = RequestMethod.GET, params = "mainPortfol")
    public String getMainPortfolForm(Model model) {
        log.info("/home?mainPortfol");

        model.addAttribute("testMember", new TestMember());

        return "html_css/portfolio/mainPortfol";
    }
}