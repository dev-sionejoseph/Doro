package com.doro.doroSpring.repository;

import com.doro.doroSpring.model.ToDoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<ToDoItem, String> {

}