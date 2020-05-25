package com.doro.doroSpring.model;

import javax.persistence.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "to_do_lists")
public class ToDoList {
    @Id
    @Column(name ="id")
    private String id;

    @Column(name ="title")
    private String title;

    @Column(name ="user_id")
    private String user_id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "list_id")
    private List<ToDoItem> items;



    public ToDoList() {
        super();
    }

    public ToDoList(String id, String title, Array items) {
        super();
        this.id = id;
        this.title = title;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public void addItem(ToDoItem item){
        if (items == null) {
            items = new ArrayList<>();
        }

        items.add(item);
    }
}