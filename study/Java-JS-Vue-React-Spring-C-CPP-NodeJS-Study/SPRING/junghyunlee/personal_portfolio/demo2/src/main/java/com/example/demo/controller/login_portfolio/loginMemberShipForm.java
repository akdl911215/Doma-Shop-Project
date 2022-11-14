package com.example.demo.controller.login_portfolio;

import com.example.demo.controller.joinmember_portfolio.JoinMemberController_portfolio;
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
@RequestMapping(value = "/loginMemberShip")
public class loginMemberShipForm {
    private static final Logger log =
            LoggerFactory.getLogger(JoinMemberController_portfolio.class);

    @GetMapping("/home")
    public String getHome() {
        log.info("getHome()");

        return "html_css/portfolio/mainPortfol";
    }

    @RequestMapping(value = "/home",
            method = RequestMethod.GET, params = "register")
    public String getRegisterForm(Model model) {
        log.info("/home?register");

        model.addAttribute("testMember", new TestMember());

        return "spring/portfolio_spring/loginMemberShipForm";
    }


    @PostMapping("/register")
    public String doRegisterWithVoidParameter(
            String userName, String password) {

        log.info("doRegisterWithVoidParameter()");
        log.info("uesrId = " + userName);
        log.info("passwd = " + password);

        return "html_css/success/loginSuccess.html";
    }

    @RequestMapping(value = "/home",
            method = RequestMethod.GET, params = "mainPortfol")
    public String getMainPortfolForm(Model model) {
        log.info("/home?mainPortfol");

        model.addAttribute("testMember", new TestMember());

        return "html_css/portfolio/mainPortfol";
    }
}