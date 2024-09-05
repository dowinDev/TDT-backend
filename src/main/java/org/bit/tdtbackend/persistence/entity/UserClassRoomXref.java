package org.bit.tdtbackend.persistence.entity;

import jakarta.persistence.*;
import lombok.*;
import org.bit.tdtbackend.utils.Constants;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_classroom_xref")
public class UserClassRoomXref {

    @Id
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private Account user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "class_id", nullable = false)
    private ClassRoom classRoom;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private Constants.statusActionEnum status;
}
