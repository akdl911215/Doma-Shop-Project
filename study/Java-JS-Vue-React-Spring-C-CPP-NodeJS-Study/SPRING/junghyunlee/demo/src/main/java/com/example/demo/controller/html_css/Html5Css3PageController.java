package com.example.demo.controller.html_css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import com.example.demo.game.DiceGame;
import com.example.demo.homework.CreateTeam;

// 결국 Event Handler에 해당한다.
// 몰컴하다 부모님이 뜨면 자는척 하다가 다시 게임하기 등등
@Controller
public class Html5Css3PageController {
    public static Logger log =
            LoggerFactory.getLogger(Html5Css3PageController.class);

    // 결국 Controller 입장에서의 Event는 무엇인가 ?
    // 사용자가 Web 서버에 URL 요청을 하는 것이다.
    @GetMapping("/first")
    public String getFirst() {
        log.info("Enter getFirst()");

        log.info("여기에 서비스 요청하는 코드를 작성한다.");

        log.info("요청을 처리하고 받아온 결과에 대해 " +
                "어떤 html 파일이 이를 출력할지 작성한다.");

        return "html_css/success.html";
    }

    @GetMapping("/ul_li")
    public String getUlLi() {
        log.info("Enter getUlLi()");

        return "html_css/text/ul_li.html";
    }

    @GetMapping("/ol_li")
    public String getOlLi() {
        log.info("Enter getOlLi()");

        return "html_css/text/ol_li.html";
    }

    @GetMapping("/img_test")
    public String getImg() {
        log.info("Enter getImg()");

        return "html_css/image/img_test.html";
    }

    @GetMapping("/p_test")
    public String getPTag() {
        log.info("Enter getPTag()");

        return "html_css/text/p_test.html";
    }

    @GetMapping("/blockquote_test")
    public String getBlockquote() {
        log.info("Enter getBlockquote()");

        return "html_css/text/blockquote_test.html";
    }

    @GetMapping("/pre_test")
    public String getPre() {
        log.info("Enter getPre()");

        return "html_css/text/pre_test.html";
    }

    @GetMapping("/style_page_test")
    public String getStylingTestPage() {
        log.info("Enter getStylingTestPage()");

        return "html_css/text/style_page_test.html";
    }

    @GetMapping("/p_options_test")
    public String getPOptionsTest() {
        log.info("Enter getPOptionsTest()");

        return "html_css/text/p_options_test.html";
    }

    @GetMapping("/mark_test")
    public String getMarkTest() {
        log.info("Enter getMarkTest()");

        return "html_css/text/mark_test.html";
    }

    @GetMapping("/span_color_test")
    public String getSpanColorTest() {
        log.info("Enter getSpanColorTest()");

        return "html_css/text/span_color_test.html";
    }

    @GetMapping("/ul_ol_li_test")
    public String getUlOlLiTest() {
        log.info("Enter getUlOlLiTest()");

        return "html_css/text/ul_ol_li_test.html";
    }

    @GetMapping("/ul_ul_li_test")
    public String getUlUlLiTest() {
        log.info("Enter getUlUlLiTest()");

        return "html_css/text/ul_ul_li_test.html";
    }

    // 컨트롤러에 새로운 맵핑을 만들어서
    // 사용자가 URL 요청을 하면
    // 주사위 게임이 동작하게 만들어보자!
    // 웹 페이지 출력은 Success로
    // 위에서 만들었던 "html_css/success.html" 를 활용한다.
    // 아직 게임 결과를 출력할 수 없으니
    // 콘솔창에 게임 결과를 출력하도록 한다.
    @GetMapping("/diceGame")
    public String getDiceGame() {
        log.info("Enter getDiceGame()");

        DiceGame dg = new DiceGame();
        dg.printWinner();

        return "html_css/success.html";
    }

    @GetMapping("/allocteam")
    public String getAllocTeam() {
        log.info("Enter getAllocTeam()");
        final int TEAMNUMBER = 2;
        System.out.println("지금부터 랜덤 팀 구성을 시작합니다.");
        String[] nameA = {
                "고동영 ", "장해솔 ", "류슬기 ", "박재민 ", "한다은 ",
                "최현정 ", "오진욱 ", "조진형 ", "이정현 "
        };
        String[] nameB = {
                "이범진 ", "박소현 ", "탁성진 ", "노찬욱 ",
                "박기범 ", "하진주 ", "이승윤 ", "최임식 "
        };

        CreateTeam ct = new CreateTeam(nameA, nameB, TEAMNUMBER);
        ct.allocRandomTeam();
        ct.printArrayList(ct.getAteamArrayList());
        ct.printArrayList(ct.getBteamArrayList());
        return "html_css/success.html";
    }

    @GetMapping("/tableTest")
    public String getTableTest() {
        log.info("Enter getTableTest()");


        return "html_css/table/tableTest.html";
    }

    @GetMapping("/mat3by3Test")
    public String getMat3by3Test() {
        log.info("Enter GetMat3by3Test");

        return "html_css/table/mat3by3Test.html";
    }

    @GetMapping("/tableTest2")
    public String getTableTest2() {
        log.info("Enter getTableTest2");

        return "html_css/table/tableTest2.html";
    }

    @GetMapping("/captionTest")
    public String getCaptionTest() {
        log.info("Enter getCaptionTest");

        return "html_css/table/captionTest.html";
    }

    @GetMapping("/tableTest3")
    public String getTableTest3() {
        log.info("Enter getTableTest3");

        return "html_css/table/tableTest3.html";
    }

    @GetMapping("/tableTest4")
    public String getTableTest4() {
        log.info("Enter getTableTest4");

        return "html_css/table/tableTest4.html";
    }

    @GetMapping("/tableTest5")
    public String getTableTest5() {
        log.info("Enter getTableTest5");

        return "html_css/table/tableTest5.html";
    }

    @GetMapping("/imgAltTest")
    public String getImgAltTest() {
        log.info("Enter getImgAltTest");

        return "html_css/image/imgAltTest.html";
    }

    @GetMapping("/imgSizeTest")
    public String getImgSizeTest() {
        log.info("Enter getImgSizeTest");

        return "html_css/image/imgSizeTest.html";
    }

    @GetMapping("/imgFigcaptionTest")
    public String getImgFigcaptionTest() {
        log.info("Enter getImgFigcaptionTest");

        return "html_css/image/imgFigcaptionTest.html";
    }

    @GetMapping("/imgCompanyProfileTest")
    public String getImgCompanyProfileTest() {
        log.info("Enter getImgCompanyProfileTest");

        return "html_css/image/imgCompanyProfileTest.html";
    }

    @GetMapping("/aTagTest")
    public String getATagTest() {
        log.info("Enter getATagTest");

        return "html_css/text/aTagTest.html";
    }

    @GetMapping("/aTagStyleTest")
    public String getATagStyleTest() {
        log.info("Enter getATagStyleTest");

        return "html_css/text/aTagStyleTest.html";
    }

    @GetMapping("/iFrameTest")
    public String getAIFrameTest() {
        log.info("Enter getAIFrameTest");

        return "html_css/image/iFrameTest.html";
    }

    @GetMapping("/idCheckTest")
    public String getIdCheckTest() {
        log.info("Enter getIdCheckTest");

        return "html_css/text/idCheckTest.html";
    }

    @GetMapping("/visitedTest")
    public String getVisitedTest() {
        log.info("Enter getVisitedTest");

        return "html_css/text/visitedTest.html";
    }

    @GetMapping("/roiATagTest")
    public String getRoiATagTest() {
        log.info("Enter getRoiATagTest");

        return "html_css/image/roiATagTest.html";
    }

    @GetMapping("/formTest")
    public String getFormTest() {
        log.info("Enter getFormTest");

        return "html_css/form/formTest.html";
    }

    @GetMapping("/loginFormTest")
    public String getLoginFormTest() {
        log.info("Enter getLoginFormTest");

        return "html_css/form/loginFormTest.html";
    }

    @GetMapping("/personalPortfolio")
    public String getPersonalPortfolio() {
        log.info("Enter getPersonalPortfolio");

        return "html_css/portfolio/personalPortfolio.html";
    }

    @GetMapping("/webFormTest")
    public String getWebFormTest() {
        log.info("Enter getWebFormTest");

        return "html_css/form/webFormTest.html";
    }

    @GetMapping("/webFormTest2")
    public String getWebFormTest2() {
        log.info("Enter getWebFormTest2");

        return "html_css/form/webFormTest2.html";
    }

    @GetMapping("/webFormTest3")
    public String getWebFormTest3() {
        log.info("Enter getWebFormTest3");

        return "html_css/form/webFormTest3.html";
    }

    @GetMapping("/webFormTest4")
    public String getWebFormTest4() {
        log.info("Enter getWebFormTest4");

        return "html_css/form/webFormTest4.html";
    }

    @GetMapping("/webFormTest5")
    public String getWebFormTest5() {
        log.info("Enter getWebFormTest5");

        return "html_css/form/webFormTest5.html";
    }

    @GetMapping("/webFormTest6")
    public String getWebFormTest6() {
        log.info("Enter getWebFormTest6");

        return "html_css/form/webFormTest6.html";
    }

    @GetMapping("/webFormTest7")
    public String getWebFormTest7() {
        log.info("Enter getWebFormTest7");

        return "html_css/form/webFormTest7.html";
    }

    @GetMapping("/webFormWithSelect")
    public String getWebFormWithSelect() {
        log.info("Enter getWebFormWithSelect");

        return "html_css/form/webFormWithSelect.html";
    }

    @GetMapping("/webFormOptGroup")
    public String getWebFormOptGroup() {
        log.info("Enter getWebFormOptGroup");

        return "html_css/form/webFormOptGroup.html";
    }

    @GetMapping("/webFormLegacy")
    public String getWebFormLegacy() {
        log.info("Enter getWebFormLegacy");

        return "html_css/form/webFormLegacy.html";
    }

    @GetMapping("/webProgressBarTest")
    public String getWebProgressBarTest() {
        log.info("Enter getWebProgressBarTest");

        return "html_css/progbar/webProgressBarTest.html";
    }

    @GetMapping("/webProgressBarTest2")
    public String getWebProgressBarTest2() {
        log.info("Enter getWebProgressBarTest2");

        return "html_css/progbar/webProgressBarTest2.html";
    }

    @GetMapping("/webCSS3Test")
    public String getWebCSS3Test() {
        log.info("Enter getWebCSS3Test");

        return "html_css/css3basic/webCSS3Test.html";
    }

    @GetMapping("/webCSS3SectionTest")
    public String getWebCSS3SectionTest() {
        log.info("Enter getWebCSS3SectionTest");

        return "html_css/css3basic/webCSS3SectionTest.html";
    }

    @GetMapping("/webCSS3StyleSheetTest")
    public String getWebCSS3StyleSheetTest() {
        log.info("Enter getWebCSS3StyleSheetTest");

        return "html_css/css3basic/webCSS3StyleSheetTest.html";
    }

    @GetMapping("/webBorderStyleTest")
    public String getWebBorderStyleTest() {
        log.info("Enter getWebBorderStyleTest");

        return "html_css/css3basic/webBorderStyleTest.html";
    }

    @GetMapping("/webHow2AvoidTest")
    public String getWebHow2AvoidTest() {
        log.info("Enter getWebHow2AvoidTest");

        return "html_css/css3basic/webHow2AvoidTest.html";
    }

    @GetMapping("/webRotationTransformTest")
    public String getWebRotationTransformTest() {
        log.info("Enter getWebRotationTransformTest");

        return "html_css/css3basic/webRotationTransformTest.html";
    }

    @GetMapping("/webFontTest")
    public String getWebFontTest() {
        log.info("Enter getWebFontTest");

        return "html_css/css3basic/webFontTest.html";
    }

    @GetMapping("/webOverflowTest")
    public String getWebOverflowTest() {
        log.info("Enter getWebOverflowTest");

        return "html_css/overflow/webOverflowTest.html";
    }

    @GetMapping("/webTextBorderTest")
    public String getWebTextBorderTest() {
        log.info("Enter getWebTextBorderTest");

        return "html_css/border/webTextBorderTest.html";
    }

    @GetMapping("/webCustomUlTest")
    public String getWebCustomUlTest() {
        log.info("Enter getWebCustomUlTest()");

        return "html_css/custom/webCustomUlTest.html";
    }

    @GetMapping("/webBoxTest")
    public String getWebBoxTest() {
        log.info("Enter getWebBoxTest()");

        return "html_css/box/webBoxTest.html";
    }

    @GetMapping("/webBlockInlineTest")
    public String getWebBlockInlineTest() {
        log.info("Enter getWebBlockInlineTest()");

        return "html_css/box/webBlockInlineTest.html";
    }

    @GetMapping("/webNavUlLiBoxTest")
    public String getWebNavUlLiBoxTest() {
        log.info("Enter getWebNavUlLiBoxTest()");

        return "html_css/box/webNavUlLiBoxTest.html";
    }

    @GetMapping("/webNavUlLiBoxTest2")
    public String getWebNavUlLiBoxTest2() {
        log.info("Enter getWebNavUlLiBoxTest2()");

        return "html_css/box/webNavUlLiBoxTest2.html";
    }

    @GetMapping("/webInlineBlockTest")
    public String getWebInlineBlockTest() {
        log.info("Enter getWebInlineBlockTest()");

        return "html_css/box/webInlineBlockTest.html";
    }

    @GetMapping("/webBoxBoderStyleTest")
    public String getWebBoxBoderStyleTest() {
        log.info("Enter getWebBoxBoderStyleTest()");

        return "html_css/box/webBoxBoderStyleTest.html";
    }

    @GetMapping("/webBoxBoderStyleTest2")
    public String getWebBoxBoderStyleTest2() {
        log.info("Enter getWebBoxBoderStyleTest2()");

        return "html_css/box/webBoxBoderStyleTest2.html";
    }

    @GetMapping("/webBoxRoudTest")
    public String getWebBoxRoudTest() {
        log.info("Enter getWebBoxRoudTest()");

        return "html_css/box/webBoxRoudTest.html";
    }

    @GetMapping("/webBoxEllipseTest")
    public String getWebBoxEllipseTest() {
        log.info("Enter getWebBoxEllipseTest()");

        return "html_css/box/webBoxEllipseTest.html";
    }

    @GetMapping("/webBoxSubRoundTest2")
    public String getWebBoxSubRoundTest2() {
        log.info("Enter getWebBoxSubRoundTest2()");

        return "html_css/box/webBoxSubRoundTest2.html";
    }

    @GetMapping("/webBoxMarginTest")
    public String getWebBoxMarginTest() {
        log.info("Enter getWebBoxMarginTest()");

        return "html_css/box/webBoxMarginTest.html";
    }

    @GetMapping("/webBoxPaddingTest")
    public String getWebBoxPaddingTest() {
        log.info("Enter getWebBoxPaddingTest()");

        return "html_css/box/webBoxPaddingTest.html";
    }

    @GetMapping("/webBoxSizingTest")
    public String getWebBoxSizingTest() {
        log.info("Enter getWebBoxSizingTest()");

        return "html_css/box/webBoxSizingTest.html";
    }

    @GetMapping("/webBoxLayoutTest")
    public String getWebBoxLayoutTest() {
        log.info("Enter getWebBoxLayoutTest()");

        return "html_css/box/webBoxLayoutTest.html";
    }

    @GetMapping("/webBoxLayoutTest2")
    public String getWebBoxLayoutTest2() {
        log.info("Enter getWebBoxLayoutTest2()");

        return "html_css/box/webBoxLayoutTest2.html";
    }

    @GetMapping("/webBoxOutlineTest")
    public String getWebBoxOutlineTest() {
        log.info("Enter getWebBoxOutlineTest()");

        return "html_css/box/webBoxOutlineTest.html";
    }

    @GetMapping("/webBoxPositionRelativeTest")
    public String getWebBoxPositionRelativeTest() {
        log.info("Enter getWebBoxPositionRelativeTest()");

        return "html_css/box/webBoxPositionRelativeTest.html";
    }

    @GetMapping("/webMenuDropDownTest")
    public String getWebMenuDropDownTest() {
        log.info("Enter getWebMenuDropDownTest()");

        return "html_css/menubar/webMenuDropDownTest.html";
    }

    @GetMapping("/webColumnRuleTest")
    public String getWebColumnRuleTest() {
        log.info("Enter getWebColumnRuleTest()");

        return "html_css/column-rule/webColumnRuleTest.html";
    }

    @GetMapping("/webCusomTableBorederTest")
    public String getWebCusomTableBorederTest() {
        log.info("Enter getWebCusomTableBorederTest()");

        return "html_css/border/webCusomTableBorederTest.html";
    }

    @GetMapping("/webCusomTableBorederTest2")
    public String getWebCusomTableBorederTest2() {
        log.info("Enter getWebCusomTableBorederTest2()");

        return "html_css/border/webCusomTableBorederTest2.html";
    }

    @GetMapping("/webCusomTableBorederTest3")
    public String getWebCusomTableBorederTest3() {
        log.info("Enter getWebCusomTableBorederTest3()");

        return "html_css/border/webCusomTableBorederTest3.html";
    }

    @GetMapping("/webCusomTableBorederTest4")
    public String getWebCusomTableBorederTest4() {
        log.info("Enter getWebCusomTableBorederTest4()");

        return "html_css/border/webCusomTableBorederTest4.html";
    }

    @GetMapping("/webCusomTableBorederTest5")
    public String getWebCusomTableBorederTest5() {
        log.info("Enter getWebCusomTableBorederTest5()");

        return "html_css/border/webCusomTableBorederTest5.html";
    }

    @GetMapping("/webCusomTableBorederTest6")
    public String getWebCusomTableBorederTest6() {
        log.info("Enter getWebCusomTableBorederTest6()");

        return "html_css/border/webCusomTableBorederTest6.html";
    }

    @GetMapping("/webCusomTableBorederTest7")
    public String getWebCusomTableBorederTest7() {
        log.info("Enter getWebCusomTableBorederTest7()");

        return "html_css/border/webCusomTableBorederTest7.html";
    }

    @GetMapping("/webPlayMP3Test")
    public String getWebPlayMP3Test() {
        log.info("Enter getWebPlayMP3Test()");

        return "html_css/multimedia/webPlayMP3Test.html";
    }

    @GetMapping("/webPlayVideoTest")
    public String getwebPlayVideoTest() {
        log.info("Enter getwebPlayVideoTest()");

        return "html_css/multimedia/webPlayVideoTest.html";
    }

    @GetMapping("/webSelectTest")
    public String getwebSelectTest() {
        log.info("Enter getwebSelectTest()");

        return "html_css/selector/webSelectTest.html";
    }

    @GetMapping("/webSelectTest2")
    public String getwebSelectTest2() {
        log.info("Enter getwebSelectTest2()");

        return "html_css/selector/webSelectTest2.html";
    }

    @GetMapping("/webSelectTest3")
    public String getwebSelectTest3() {
        log.info("Enter getwebSelectTest3()");

        return "html_css/selector/webSelectTest3.html";
    }

    @GetMapping("/webSelectTest4")
    public String getwebSelectTest4() {
        log.info("Enter getwebSelectTest4()");

        return "html_css/selector/webSelectTest4.html";
    }

    @GetMapping("/webSelectTest5")
    public String getwebSelectTest5() {
        log.info("Enter getwebSelectTest5()");

        return "html_css/selector/webSelectTest5.html";
    }

    @GetMapping("/webSelectTest6")
    public String getwebSelectTest6() {
        log.info("Enter getwebSelectTest6()");

        return "html_css/selector/webSelectTest6.html";
    }

    @GetMapping("/webSelectTest7")
    public String getwebSelectTest7() {
        log.info("Enter getwebSelectTest7()");

        return "html_css/selector/webSelectTest7.html";
    }

    @GetMapping("/webSelectTest8")
    public String getwebSelectTest8() {
        log.info("Enter getwebSelectTest8()");

        return "html_css/selector/webSelectTest8.html";
    }

    @GetMapping("/mainPortfoiloTest")
    public String getmainPortfoiloTest() {
        log.info("Enter getmainPortfoiloTest()");

        return "html_css/portfolio/mainPortfoiloTest.html";
    }

    @GetMapping("/mainPortfol")
    public String getMainPortfol() {
        log.info("Enter getMainPortfol()");

        return "html_css/portfolio/mainPortfol.html";
    }
}
