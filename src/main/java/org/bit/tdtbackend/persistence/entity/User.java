package org.bit.tdtbackend.persistence.entity;

import jakarta.persistence.*;
import lombok.*;
import org.bit.tdtbackend.utils.Constants;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "login",nullable = false)
    private String login;

    @Column(name = "password_hash", length = 60, nullable = false)
    private String password;

    @Column(name = "source", nullable = false)
    @Enumerated(EnumType.STRING)
    private Constants.sourceEnum source;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "secret_key")
    private String secretKey;

    @Column(name = "reset_key")
    private String resetKey;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Account> accounts;
}
