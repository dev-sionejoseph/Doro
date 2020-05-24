package com.doro.doroSpring.controller;

import com.doro.doroSpring.exceptions.ResourceNotFoundException;
import com.doro.doroSpring.model.User;
import com.doro.doroSpring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/doro/users")

public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{user_id}")
    public Optional<User> getUser(@PathVariable(value = "user_id") Long userId) {

        return this.userRepository.findById(userId);

    }

    @PostMapping("/signup")
        public User createUser(@Valid @RequestBody User user) {
            return userRepository.save(user);
        }

    @PutMapping("/{user_id}/edit")
    public ResponseEntity<User> updateUser(@PathVariable(value = "user_id") Long userId,
                                                   @Valid @RequestBody User editedUser)
            throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("No user found with id :: " + userId));


        user.setFirstName(editedUser.getFirstName());
        user.setLastName(editedUser.getLastName());
        user.setEmail(editedUser.getLastName());


        final User savedUser = userRepository.save(user);


        return ResponseEntity.ok(savedUser);

    }
}
