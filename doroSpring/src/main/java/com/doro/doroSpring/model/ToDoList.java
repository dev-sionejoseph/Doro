package com.doro.doroSpring.model;

import javax.persistence.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "to_do_lists")
public class ToDoList {
    @Id
    @GeneratedValue
    @Column(name ="id")
    private long id;

    @Column(name ="title")
    private String title;

    @OneToMany(mappedBy ="to_do_lists", cascade = CascadeType.ALL)
    @JoinColumn(name = "list_id")
    private List<ToDoItem> items;



    public ToDoList() {
        super();
    }

    public ToDoList(Long id, String title, Array items) {
        super();
        this.id = id;
        this.title = title;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<ToDoItem> getItems() {
        return items;
    }

    public void setItems(List<ToDoItem> items) {
        this.items = items;
    }

    public void addItem(ToDoItem item){
        if (items == null) {
            items = new ArrayList<>();
        }

        items.add(item);
    }
}