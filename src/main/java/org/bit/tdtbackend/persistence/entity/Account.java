package org.bit.tdtbackend.persistence.entity;

import jakarta.persistence.*;
import lombok.*;
import org.bit.tdtbackend.utils.Constants;
import org.jetbrains.annotations.NotNull;

import java.util.List;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "account")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "role", nullable = false)
    private Role role;

    @NotNull
    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.STRING)
    private Constants.statusActionEnum status;

    @OneToMany(mappedBy = "admin", fetch = FetchType.LAZY)
    private List<Schedule> schedules;

    @OneToMany(mappedBy = "admin", fetch = FetchType.LAZY)
    private List<ClassRoom> classRooms;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<ExerciseSubmission> exerciseSubmissions;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<UserClassRoomXref> userClassRoomXrefs;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<ContactsUs> contactsUs;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<TeacherAssistant> teacherAssistants;
}
