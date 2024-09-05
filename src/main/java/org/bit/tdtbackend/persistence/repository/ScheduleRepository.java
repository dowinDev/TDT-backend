package org.bit.tdtbackend.persistence.repository;

import org.bit.tdtbackend.persistence.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
}
