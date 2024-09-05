package org.bit.tdtbackend.persistence.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.bit.tdtbackend.utils.Constants;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "classroom")
public class ClassRoom {

    @Id
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.STRING)
    private Constants.statusActionEnum status;

    @NotNull
    @Column(name = "member_numbers",
            nullable = false,
            columnDefinition = "integer default 0")
    private Integer memberNumbers;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "admin_id", nullable = false)
    private Account admin;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private Constants.workHourseTypeEnum type;

    @Column(name = "date")
    private Date date;

    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "classRoom", fetch = FetchType.LAZY)
    private List<Schedule> schedules;

    @OneToMany(mappedBy = "classRoom", fetch = FetchType.LAZY)
    private List<Exercises> exercises;

    @OneToMany(mappedBy = "classRoom", fetch = FetchType.LAZY)
    private List<UserClassRoomXref> userClassRoomXrefs;

    @OneToMany(mappedBy = "classRoom", fetch = FetchType.LAZY)
    private List<TeacherAssistant> teacherAssistants;
}
