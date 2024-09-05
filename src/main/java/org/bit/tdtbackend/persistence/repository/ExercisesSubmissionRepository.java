package org.bit.tdtbackend.persistence.repository;

import org.bit.tdtbackend.persistence.entity.ExerciseSubmission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExercisesSubmissionRepository extends JpaRepository<ExerciseSubmission, Long> {
}
