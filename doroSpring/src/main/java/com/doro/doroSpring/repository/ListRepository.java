package com.doro.doroSpring.repository;

import com.doro.doroSpring.model.ToDoList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListRepository extends JpaRepository<ToDoList, Long> {

}
