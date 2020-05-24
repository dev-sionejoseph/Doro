package com.doro.doroSpring.controller;

import com.doro.doroSpring.model.ToDoItem;
import com.doro.doroSpring.model.User;
import com.doro.doroSpring.repository.ListRepository;
import com.doro.doroSpring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/users")

public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/users")
        public User createUser(@Valid @RequestBody User user) {
            return userRepository.save(user);
        }


}
