package com.doro.doroSpring.controller;


import com.doro.doroSpring.model.ToDoItem;
import com.doro.doroSpring.model.ToDoList;
import com.doro.doroSpring.repository.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user_{id}/")

public class ListController {

    @Autowired
    private ListRepository listRepository;





    @GetMapping("/lists")
    public List<ToDoList> getUserToDoLists(Model model) {

        return this.listRepository.findAllById();

    }


    @PostMapping("/lists"){

    }



//  Update Employee

    @PutMapping("/lists")


//  Delete Employee

    @DeleteMapping("lists")
}
