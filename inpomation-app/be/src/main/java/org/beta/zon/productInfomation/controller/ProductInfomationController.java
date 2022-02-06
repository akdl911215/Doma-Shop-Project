package org.beta.zon.productInfomation.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.beta.zon.productInfomation.domain.dto.ProductInfomationDto;
import org.beta.zon.productInfomation.service.ProductInfomationServieImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "product_infomation", method = {RequestMethod.POST, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.PUT})
@RequiredArgsConstructor
@Log4j2
public class ProductInfomationController {

    private final ProductInfomationServieImpl productInfomationServie;

    @PostMapping("/register")
    public Map<String, String> register(@RequestBody ProductInfomationDto productInfomationDto) throws IOException {
        System.out.println("컨트롤러 productInfomationDto : " + productInfomationDto);

        productInfomationServie.register(productInfomationDto);

        Map<String, String> resultMap = new HashMap<>();

        return resultMap;
    }

    @PutMapping("/put/{idx}")
    public ResponseEntity<?> put(@PathVariable("idx") Long idx,
                                 @RequestBody ProductInfomationDto productInfomationDto) {

        return new ResponseEntity<>("{}", HttpStatus.OK);
    }

    @DeleteMapping("/delete/{idx}")
    public ResponseEntity<?> delete(@PathVariable("idx") Long idx) {

        return new ResponseEntity<>("{}", HttpStatus.OK);
    }
}
