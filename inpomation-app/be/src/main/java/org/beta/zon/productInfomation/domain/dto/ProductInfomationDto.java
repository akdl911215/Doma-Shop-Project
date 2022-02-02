package org.beta.zon.productInfomation.domain.dto;

import lombok.*;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Data
@Component
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Log4j2
public class ProductInfomationDto {

    private Long productInpomationId;
    private String title;
    private String writer;
    private String content;
    private String viewCount;

    public String getTitle(String title) { return title; }
    public String getWriter(String writer) { return writer; }
    public String getConetnt(String content) { return content; }
    public String getViewCount(String viewCount) { return viewCount; }
}
