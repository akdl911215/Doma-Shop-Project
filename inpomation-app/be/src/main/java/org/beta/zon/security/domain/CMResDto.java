package org.beta.zon.security.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CMResDto<T> {

    private Integer statusCode; // 0이면 실패, 1이면 성공
    private T data;

}
