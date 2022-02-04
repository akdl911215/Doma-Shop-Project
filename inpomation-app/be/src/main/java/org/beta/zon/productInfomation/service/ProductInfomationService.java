package org.beta.zon.productInfomation.service;

import org.beta.zon.productInfomation.domain.ProductInfomation;
import org.beta.zon.productInfomation.domain.dto.ProductInfomationDto;

public interface ProductInfomationService {

    default ProductInfomation dtoEntity(ProductInfomationDto productInfomationDto) {
        ProductInfomation entity = ProductInfomation.builder()
                .productInpomationId(productInfomationDto.getProductInpomationId())
                .title(productInfomationDto.getTitle())
                .writer(productInfomationDto.getWriter())
                .content(productInfomationDto.getContent())
                .viewCount(productInfomationDto.getViewCount())
                .build();

        return entity;
    }

    default ProductInfomationDto entityDto(ProductInfomation productInfomation) {
        ProductInfomationDto entityDto = ProductInfomationDto.builder()
                .productInpomationId(productInfomation.getProductInpomationId())
                .title(productInfomation.getTitle())
                .writer(productInfomation.getWriter())
                .content(productInfomation.getContent())
                .viewCount(productInfomation.getViewCount())
                .build();

        return entityDto;
    }
}

