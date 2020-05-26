package com.doro.doroSpring.repository;

import com.doro.doroSpring.model.ToDoList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ListRepository extends JpaRepository<ToDoList, String> {

    List<ToDoList> findAllById(String userId);
}
