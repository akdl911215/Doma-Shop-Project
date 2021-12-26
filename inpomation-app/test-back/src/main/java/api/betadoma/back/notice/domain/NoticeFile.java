package api.betadoma.back.notice.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@ToString(exclude = "notices")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "notice_file")
public class NoticeFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notice_file_id")
    private Long noticeFileId;

    @Column(name = "uuid")
    private String uuid;

    @Column(name = "img_name")
    private String imgName;

    private String path;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "notice_id")
    private Notice notice;
}
