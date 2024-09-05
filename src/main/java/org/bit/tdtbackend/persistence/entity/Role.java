package org.bit.tdtbackend.persistence.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.bit.tdtbackend.utils.Constants;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Persistable;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "role")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@JsonIgnoreProperties(value = {"new", "id"})
@Getter
@Setter
public class Role implements Serializable, Persistable<String> {

    @NotNull
    @Id
    @Column(name = "name", length = 50, nullable = false)
    @Enumerated(EnumType.STRING)
    private Constants.RoleEnum name;

    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
    private List<Account> accounts;

    @Override
    public String getId() {
        return name.name();
    }

    @Override
    public boolean isNew() {
        return false;
    }
}