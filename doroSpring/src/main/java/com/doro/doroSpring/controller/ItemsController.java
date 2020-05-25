package com.doro.doroSpring.controller;
import com.doro.doroSpring.exceptions.ResourceNotFoundException;
import com.doro.doroSpring.model.ToDoItem;
import com.doro.doroSpring.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/doro")
public class ItemsController {

    @Autowired
    private ItemRepository itemRepository;





    @GetMapping("/{user_id}/{list_id}/items")
    public List<ToDoItem> getItemsForList(@PathVariable(value = "list_id") String listId) {

//        ToDoList.getItems();

        return this.itemRepository.findAllById(Collections.singleton(listId));

    }


    @PostMapping("/{user_id}/{list_id}/new-item")
    public ToDoItem createItem(@Valid @RequestBody ToDoItem item) {
        return itemRepository.save(item);
    }



    @PutMapping("/{user_id}/{list_id}/{item_id}")
    public ResponseEntity<ToDoItem> updateEmployee(@PathVariable(value = "item_id") String itemId,
                                                   @Valid @RequestBody ToDoItem editedItem)
            throws ResourceNotFoundException {
        ToDoItem item = itemRepository.findById(itemId)
                .orElseThrow(()-> new ResourceNotFoundException("No such item found :: " + itemId));


        item.setDetails(editedItem.getDetails());
        item.setDeadline(editedItem.getDeadline());


        final ToDoItem savedItem = itemRepository.save(item);


        return ResponseEntity.ok(savedItem);

    }


    @DeleteMapping("/{user_id}/{list_id}/{item_id}")
    public Map<String, Boolean> deletedItem(@PathVariable(value = "item_id") String itemId)
            throws ResourceNotFoundException {
        ToDoItem item = itemRepository.findById(itemId)
                .orElseThrow(()-> new ResourceNotFoundException("No such item found :: " + itemId));

        itemRepository.delete(item);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted item", Boolean.TRUE);

        return response;

    }
}
