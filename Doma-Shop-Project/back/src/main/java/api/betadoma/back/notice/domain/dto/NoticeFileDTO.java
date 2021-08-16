package api.betadoma.back.notice.domain.dto;

import api.betadoma.back.notice.domain.Notice;
import lombok.*;
import org.springframework.stereotype.Component;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@Component
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NoticeFileDTO {

    private Long noticeFileId;
    private String uuid;
    private String imgName;
    private String path;

    private Notice notice;

    public Long getNoiceFileId() { return noticeFileId; }
    public String getPath() { return path; }
    public String getUuid() { return uuid; }
    public String getImgName() { return imgName; }
    public String getImgeURL() {
        try {
            return URLEncoder.encode(path + "/" + uuid + "_" + imgName,"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return "";
    }
    public String getTumbnailURL() {
        try {
            return URLEncoder.encode(path + "/s_" + uuid + "_" + imgName, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return "";
    }
}
