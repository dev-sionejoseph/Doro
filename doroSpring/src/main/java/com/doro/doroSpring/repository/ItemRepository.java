package com.doro.doroSpring.repository;

import com.doro.doroSpring.model.ToDoItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<ToDoItem, String> {

    List<ToDoItem> findAllById(String listId);
}