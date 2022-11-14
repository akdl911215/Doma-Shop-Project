package org.zerock.guestbook.sample.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.zerock.guestbook.sample.domain.SampleDTO;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Controller
@Log4j2
@RequestMapping("/sample")
public class SampleController {

    @GetMapping({"/exInline"})
    public String exInline(RedirectAttributes redirectAttributes){
        log.info("exInline.............");

        SampleDTO dto = SampleDTO.builder()
                .sno(100L)
                .first("First...100")
                .last("Last...100")
                .regTime(LocalDateTime.now())
                .build();
        redirectAttributes.addFlashAttribute("result", "success");
        redirectAttributes.addFlashAttribute("dto", dto);
        // RedirectAttributes 클래스를 통해 string 형태와 map, list, vo 등의 object 형태로 넘겨줄 수 있다.

        return "redirect:/sample/ex3";
    }

    @GetMapping("/ex3") // 내일 다시해보기
    public void ex3() {
        log.info("ex3");
    }

    @GetMapping("/ex1")
    public void ex1(){
        log.info("ex1.............");
    }

    @GetMapping("/ex2")
    public void exModel(Model model){
        List<SampleDTO> list = IntStream.rangeClosed(1,20).asLongStream().mapToObj(
                i -> {
                    SampleDTO dto = SampleDTO.builder()
                            .sno(i)
                            .first("First.." + i)
                            .last("Last.." + i)
                            .regTime(LocalDateTime.now())
                            .build();
                    return dto;
                }).collect(Collectors.toList());

        model.addAttribute("list", list);

    }

    @GetMapping("/exLink")
    public void exModelLink(Model model){
        List<SampleDTO> list = IntStream.rangeClosed(1,20).asLongStream().mapToObj(
                i -> {
                    SampleDTO dto = SampleDTO.builder()
                            .sno(i)
                            .first("First.." + i)
                            .last("Last.." + i)
                            .regTime(LocalDateTime.now())
                            .build();
                    return dto;
                }).collect(Collectors.toList());

        model.addAttribute("list", list);

    }

    @GetMapping({"/exLayout1", "/exLAyout2", "/exTemplate"})
    public void exLayout1(){
        log.info("exLayout........");
    }

    @GetMapping("/exSidebar")
    public void exlayout2() {
        log.info("exLayout2..........");
    }
}
