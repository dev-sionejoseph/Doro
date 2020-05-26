package com.doro.doroSpring.controller;


import com.doro.doroSpring.exceptions.ResourceNotFoundException;
import com.doro.doroSpring.model.ToDoList;
import com.doro.doroSpring.repository.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/doro/users")

public class ListController {

    @Autowired
    private ListRepository listRepository;





    @GetMapping("/{user_id}/lists")
    public List<ToDoList> getUserToDoLists(@PathVariable(value = "user_id") String userId) {

        return this.listRepository.findAllById(userId);

    }

    @GetMapping("/{user_id}/{list_id}")
    public List<ToDoList> getExactList(@PathVariable(value = "list_id") String listId) {

        return this.listRepository.findAllById(listId);

    }

    @PostMapping("/{user_id}/lists")
        public ToDoList createList(@Valid @RequestBody ToDoList list) {
            return listRepository.save(list);
        }



    @PutMapping("/{user_id}/{list_id}/edit")
    public ResponseEntity<ToDoList> updateList(@PathVariable(value = "list_id") String listId,
                                                   @Valid @RequestBody ToDoList editedList)
            throws ResourceNotFoundException {
        ToDoList list = listRepository.findById(listId)
                .orElseThrow(()-> new ResourceNotFoundException("No list found with id :: " + listId));


        list.setTitle(editedList.getTitle());


        final ToDoList savedList = listRepository.save(list);


        return ResponseEntity.ok(savedList);

    }


    @DeleteMapping("/{user_id}/{list_id}/delete")
    public Map<String, Boolean> deletedList(@PathVariable(value = "list_id") String listId)
            throws ResourceNotFoundException {
        ToDoList list = listRepository.findById(listId)
                .orElseThrow(()-> new ResourceNotFoundException("No list found with id :: " + listId));

        listRepository.delete(list);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted list", Boolean.TRUE);

        return response;

    }

}
