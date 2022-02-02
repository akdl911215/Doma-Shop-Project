package org.beta.zon.productInfomation.domain;

import lombok.*;
import org.beta.zon.common.domain.BaseEntity;
import javax.persistence.*;

@Entity
@Table(name = "product_infomation")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductInfomation extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본키 생성을 DB에 위임
    @Column(name = "product_infomation_id")
    private Long productInpomationId;

    @Column(name = "title")
    private String title;
    @Column(name = "writer")
    private String writer;
    @Column(name = "content")
    private String content;
    @Column(name = "view_count")
    private String viewCount;

//    public void changeTitle(String title) { this.title = title; }
//    public void changeWriter(String writer) { this.writer = writer; }
//    public void changeContent(String content) { this.content = content; }
//    public void changeViewCount(String viewCount) { this.viewCount = viewCount; }

//    @Builder
//    public ProductInfomation(String title, String writer, String content, String viewCount) {
//        this.title = title;
//        this.writer = writer;
//        this.content = content;
//        this.viewCount = viewCount;
//    }
}
