package com.doro.doroSpring.model;

import javax.persistence.*;

@Entity
@Table(name = "to_do_items")
public class ToDoItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="id")
    private long id;

    @Column(name ="details")
    private String details;

    @Column(name ="deadline")
    private String deadline;

    public ToDoItem() {

    }

    public ToDoItem(String details, String deadline) {
        this.details = details;
        this.deadline = deadline;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
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
}