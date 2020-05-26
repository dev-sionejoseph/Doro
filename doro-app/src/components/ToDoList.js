import React, { Component } from 'react'
import fireINIT from "../config/Firebase"
import axios from "axios"
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
    constructor(props){
        super(props);
        
        let User = fireINIT.auth().currentUser
    
        this.state={
            title:"Title" ,
            listID: null,
            itemnum: 0,
            details:'',
            deadline:'',
            adding: false,
            editing: false,
            user_id: User.uid,
            error:'',
            addedItems:[],
            newItem: false,
            delete: false
        }

        this.submitItem = this.submitItem.bind(this);
        this.submitList = this.submitList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.triggerInput = this.triggerInput.bind(this);

    }  
    
    triggerInput(e){
        let target= e.target.name
        target === "edit" ? this.setState({editing:true}) : this.setState({adding:true})
    }

    handleChange(e){
        this.setState({
             [e.target.name]: e.target.value 
            });
    }
    
    submitItem(){

        this.setState({
            itemnum: this.state.itemnum+=1,
            adding:false,
            newItem:true
        })
        
        axios.post(`/doro/${this.state.user_id}/${this.state.listID}/new-item`,{
            id:`${this.state.listID}${this.state.itemnum}`,
            details: this.state.details,
            deadline: this.state.deadline,
            list_id: this.state.listID
        })
        .catch((error)=>{
             this.setState({
                 error:`error: ${error}`
             });
        });
    }

   deleteList(){
        
    
        axios.delete(`/doro/users/${this.state.user_id}/${this.state.listID}/delete`,{
                id:`${this.state.listID}`,
                title: this.state.title,
                user_id: this.state.user_id
            }).then(()=>{
                this.setState({
                    delete: true
                })    
            })
            .catch((error)=>{
                this.setState({
                    error:`error: ${error}`
                });
            });

   }
   
   submitList(){
       
        this.setState({
           editing: false
        })

        axios.put(`/doro/users/${this.state.user_id}/${this.state.listID}/edit`,{
            id:`${this.state.listID}`,
            title: this.state.title,
            user_id: this.state.user_id
        })
        .catch((error)=>{
             this.setState({
                 error:`error: ${error}`
             });
        });


   }

    componentDidMount(){
        let list= this.props.list

        let addedItems = list.items.map(item => {
            return <ToDoItem item={item} listID={list.id}/>
        });

        this.setState({
            title: list.title,
            listID: list.id,
            itemnum: Object.keys(list.items).length,
            addedItems: addedItems
        })
    
    }

    componentDidUpdate(prevProps, prevState) {
        if((this.state.newItem === true) || 
        (this.state.delete === true)){
            let User = fireINIT.auth().currentUser

            axios.get(`/doro/users/${User.uid}/${this.state.listID}/items`)
            .then((response)=>{
                console.log(response.data)

                let items= response.data.lists;

                let addedItems = items.map(item => {
                    return <ToDoItem item={item} listID={this.state.listID}/>
                });

                this.setState({
                    newItem: false,
                    itemnum: items.length,
                    addedItems: addedItems,
                    delete:false
                })
            });
        }
    }

    render() {

        return (
            <div className="to-do-list">
                <div className="list-title-bar">
                    <div className="list-edit">
                        <button className="delete" onClick={this.deleteList}>x</button>
                        <button className="edit" name="edit" onClick={this.triggerInput}>edit</button>
                    </div>
                    { this.state.editing ? (
                        <div className="title">
                            <input name="title" placeholder={this.state.title} onChange={this.handleChange}></input>
                            <button className="done"onClick={this.submitList}>done</button>
                        </div>
                        ): 
                        (<div className="title"> {this.state.title} </div>)
                        }
                </div>
                <div className="item-container">
                    <button className="add-item" name="add" onClick={this.triggerInput}>+</button>
                    {this.state.adding ? (
                        <div className="item-input-wrap">
                            <input name="details" onChange={this.handleChange}></input>
                            <input name="deadline" onChange={this.handleChange}></input>
                            <button className="done"onClick={this.submitItem}>done</button>
                        </div>
                        ): 
                        ('')
                        }
                    {this.state.addedItems}
                </div>
            </div>
        )
    }
}
