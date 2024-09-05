package org.bit.tdtbackend.persistence.repository;

import org.bit.tdtbackend.persistence.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
