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

    @PutMapping("/modify/{productInpomationId}")
    public ResponseEntity<Map<String, String>> modify(@PathVariable("productInpomationId") Long productInpomationId,
                                 @RequestBody ProductInfomationDto productInfomationDto) {

        Map<String, String> resultMap = new HashMap<>();
        resultMap.put("Result", "Sucess");

        return new ResponseEntity(resultMap, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{productInpomationId}")
    public ResponseEntity<?> delete(@PathVariable("productInpomationId") Long productInpomationId) {

        return new ResponseEntity<>("{}", HttpStatus.OK);
    }
}
