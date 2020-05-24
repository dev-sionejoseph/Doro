package com.doro.doroSpring.controller;


import com.doro.doroSpring.model.ToDoItem;
import com.doro.doroSpring.repository.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doro/api")

public class ListController {

    @Autowired
    private ListRepository listRepository;


//  get all employees


    @GetMapping("/todo/{user_id}")
    public List<ToDoItem> getUserToDoItems(Model model) {

        return this.toDoRepository.findAllById();

    }


    @PostMapping("/todo/{user}"){

    }



//  Update Employee

    @PutMapping("/todo/{user}")


//  Delete Employee

    @DeleteMapping("/todo/{user}")
}
