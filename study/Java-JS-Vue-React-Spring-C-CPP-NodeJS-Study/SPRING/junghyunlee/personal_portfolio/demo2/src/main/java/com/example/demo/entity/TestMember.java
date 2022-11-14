package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

/* Lombok을 사용하면
   Setter, Getter 적지 않아도 알아서 만들어줌 */
@Getter
@Setter
public class TestMember {
    private String userName  = "";
    private String password = "";
    private String userNumber = "";
    private String userEmail = "";
    private String userAdress = "";

    private String introduction;
    private List<String> hobbyList;
}
