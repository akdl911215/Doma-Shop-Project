package api.betadoma.back.notice.domain.dto;

import api.betadoma.back.user.domain.role.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Log4j2
public class NoticeDTO {

    private Long noticeId;
    private String title;
    private String password;
    private String writer;
    private String content;
    private String views;

    private String uuid;
    private String imgName;

    private Long NoticeFileId;
    private List<NoticeFileDTO> noticeFileDTO;
    private List<Role> roles;

}
