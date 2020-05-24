package com.doro.doroSpring.repository;

import com.doro.doroSpring.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
