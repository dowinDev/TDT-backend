package org.bit.tdtbackend.persistence.repository;

import org.bit.tdtbackend.persistence.entity.Exercises;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercises, Long> {
}
