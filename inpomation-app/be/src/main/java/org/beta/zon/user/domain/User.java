package org.beta.zon.user.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "user")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "user_id") // , unique = true, nullable = false
    private Long userno;

    @Column(name = "username") // , unique = true, nullable = false
    private String username;
    @Column(name = "password") // , nullable = false
    private String password;
    @Column(name = "name")  // , nullable = false
    private String name;
    @Column(name = "email")  // , nullable = false
    private String email;
    @Column(name = "phone_number")  // , nullable = false
    private String phoneNumber;
    @Column(name = "address")  // , nullable = false
    private String address;

    public void changeUsername(String username) {
        this.username = username;
    }

    public void changePassword(String password) {
        this.password = password;
    }

    public void changeName(String name) {
        this.name = name;
    }

    public void changeEmail(String email) {
        this.email = email;
    }

    public void changePhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void changeAddress(String address) {
        this.address = address;
    }

}
