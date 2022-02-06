package org.beta.zon.productInfomation.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.beta.zon.productInfomation.domain.ProductInfomation;
import org.beta.zon.productInfomation.domain.dto.ProductInfomationDto;
import org.beta.zon.productInfomation.repository.ProductInfomationRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@Log4j2
@RequiredArgsConstructor
public class ProductInfomationServieImpl implements ProductInfomationService {

    private final ProductInfomationRepository productInfomationRepository;


    @Override
    public void register(ProductInfomationDto productInfomationDto) {
        ProductInfomation entity = dtoEntity(productInfomationDto);
        productInfomationRepository.save(entity);
    }
}
