package org.bit.tdtbackend.persistence.repository;

import org.bit.tdtbackend.persistence.entity.ClassRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassRoomRepository extends JpaRepository<ClassRoom, Long> {
}
