package com.doro.doroSpring.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "noop_users")
public class User {
    @Id
    @Column(name ="id")
    private String id;

    @Column(name ="first_name")
    private String firstName;

    @Column(name ="last_name")
    private String lastName;

    @Column(name ="email")
    private String email;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private List<ToDoList> lists;

    public User() {
        super();
    }

    public User(String firstName, String lastName, String email) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<ToDoList> getLists() {
        return lists;
    }

    public void setLists(List<ToDoList> lists) {
        this.lists = lists;
    }

    public void addList(ToDoList list){
        if (lists == null) {
            lists = new ArrayList<>();
        }

        lists.add(list);
    }
}
