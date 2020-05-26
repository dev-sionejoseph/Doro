import React, { Component } from 'react'
import fireINIT from "../config/Firebase"
import axios from "axios"
import ToDoList from "./ToDoList";

export default class ToDoListMenu extends Component {
    constructor(props){
        super(props);

        this.state={
            adding: false,
            editing: false,
            listnum: 0,
            data:'',
            lists:[],
            newList: false
        }

        this.handleAddList = this.handleAddList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitList = this.handleSubmitList.bind(this);
        this.handleCancelList = this.handleCancelList.bind(this);
    }

    handleAddList(){
        this.setState({
            adding: true,
        })
    }
    
    handleChange(e){
        this.setState({
            newTitle: e.target.value
        })
    }

    handleSubmitList(){
        let User = fireINIT.auth().currentUser
        
        let listBody = {
            id: this.state.listnum,
            title: this.state.newTitle,
            user_id: User.uid
        }
        
        // let newList = <ToDoList list={ listBody }/>
        
        this.setState({
            adding: false,
            listnum: this.state.listnum+=1,
            newList: true
            // lists: this.state.lists+=newList
        })

        axios.post(`/doro/users/${User.uid}/lists`, {
            id: this.state.listnum,
            title: this.state.newTitle,
            user_id: User.uid    
        }).catch((error)=>{
            this.setState({
                error:`error: ${error}`
            });
       });
    }

    handleCancelList(){
        this.setState({
            adding: false
        })
    }
    
    componentDidMount(){
       
        let User = fireINIT.auth().currentUser

        axios.get(`/doro/users/${User.uid}`)
        .then((response)=>{
            let lists = response.data.lists;


            let addedLists = lists.map(list => {
                return <ToDoList list={ list }/>
            });

            this.setState({
                lists: addedLists,
                listnum: lists.length
            })

            console.log(this.state.lists);
        
        });
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.newList === true){

            let User = fireINIT.auth().currentUser

            axios.get(`/doro/users/${User.uid}`)
            .then((response)=>{
                let lists = response.data.lists;


                let addedLists = lists.map(list => {
                    return <ToDoList list={ list }/>
                });

                this.setState({
                    lists: addedLists,
                    listnum: lists.length
                })
            
            });
        }
        
    }

    
    

    render() {

        return (
            <div id="list-menu-wrap">
                    {this.state.adding === false ? (
                    <div className="add-list-bar">
                        <button id="add-list" onClick={this.handleAddList}>+</button>
                    </div>
                    ) : (
                    <div className="add-list-bar">
                        <button id="submit-list" onClick={this.handleSubmitList}>done</button>
                        <button id="cancel-list" onClick={this.handleCancelList}>x</button>
                        <input id="list-title-input"onChange={this.handleChange}></input>
                    </div>
                    )}
                    <div id="list-container">
                        {this.state.lists}
                    </div>

            </div>
        )
    }
}
