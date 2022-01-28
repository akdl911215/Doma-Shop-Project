package org.beta.zon.common.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

@Builder
@AllArgsConstructor
@Data
public class PageRequestDto { // PageRequestDto 목적 : JPA쪽에서 사용하는 Pageable 타입의 객체를 생성하기 위함

    private int page;
    private int size;
    private String type;
    private String keyword;

    public PageRequestDto() {
        this.page = 1;
        this.size = 10;
    }

    public Pageable getPageable(Sort sort) {
        return PageRequest.of(page -1, size, sort);
    }
}
