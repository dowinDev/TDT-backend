package org.bit.tdtbackend.persistence.repository;

import org.bit.tdtbackend.persistence.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
