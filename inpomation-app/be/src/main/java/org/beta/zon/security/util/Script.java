package org.beta.zon.security.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.beta.zon.security.domain.CMResDto;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Slf4j
public class Script {

    public static void responseData(HttpServletResponse response, CMResDto cmResDto) {

        // PrintWriter는 개체의 형식화된 표현을 텍스트 출력 스트림에 출력한다.
        // PrintStream에 있는 모든 출력 메서드를 구현한다.
        // 프로그램이 인코딩 되지 않은 바이트 스트림을 사용해야 하는 원시 바이트를 작성하는 메서드는 포함되어 있지 않다.
        PrintWriter out;

        // Java Object => Serialize => JSON 변환
        // JSON => Deserialize => Java Object 변환
        ObjectMapper mapper = new ObjectMapper();

        String jsonData = null;
        try {
            // writeValueAsString(value) : value: String 타입으로 변환
            jsonData = mapper.writeValueAsString(cmResDto);
            log.info("응답 데이터 => {} ", jsonData);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        response.setHeader("Content-Type", "application/json; charset=utf-8");

        try {
            out = response.getWriter();
            out.println(jsonData);
            out.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
