package com.doro.doroSpring.model;

import javax.persistence.*;

@Entity
@Table(name = "to_do_items")
public class ToDoItem {
    @Id
    @Column(name ="id")
    private String id;

    @Column(name ="details")
    private String details;

    @Column(name ="deadline")
    private String deadline;

    @Column(name ="list_id")
    private String list_id;

    public ToDoItem() {

    }

    public ToDoItem(String details, String deadline) {
        this.details = details;
        this.deadline = deadline;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getList_id() {
        return list_id;
    }

    public void setList_id(String list_id) {
        this.list_id = list_id;
    }
}