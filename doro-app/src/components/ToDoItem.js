import React, { Component } from 'react'
import fireINIT from "../config/Firebase"
import axios from "axios"

export default class ToDoItem extends Component {
    constructor(props){
        super(props);

        let User = fireINIT.auth().currentUser;

        this.state= {
            item_id: this.props.item.id,
            details: this.props.item.details,
            deadline: this.props.item.deadline,
            editing: false,
            user_id: User.uid,
            list_id: this.props.listID,
            error:''
        }

        this.submitItem = this.submitItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.triggerInput = this.triggerInput.bind(this);
    }

    triggerInput(){
        this.setState({editing:true})
    }

    handleChange(e){
        this.setState({
             [e.target.name]: e.target.value 
            });
    }
    
    submitItem(e){
        this.setState({
            editing:false
        })
        
        axios.put(`/doro/${this.state.user_id}/${this.state.list_id}/${this.state.item_id}`,{
            id: this.state.item_id,
            details: this.state.details,
            deadline: this.state.deadline,
            list_id: this.state.list_id
        })
        .catch((error)=>{
             this.setState({
                 error:`error: ${error}`
             });
        });
    }


    render() {
        return (
            <div className="to-do-item-wrap">
                <div className="item-edit">
                    <button className="edit" onClick={this.triggerInput}>edit</button>
                </div>
                {this.state.editing ? (
                    <div className="item-edit-wrap">
                        <input className="item-details-input" placeholder={this.state.details} name="details" onChange={this.handleChange}></input>
                        <input className="item-deadline-input"placeholder={this.state.deadline} name="deadline" onChange={this.handleChange}></input>
                        <button className="done"onClick={this.submitItem}>done</button>
                    </div>
                ):(
                    <div className="item-info-wrap">
                        <div className="item-details">{this.state.details}</div>
                        <div className="item-deadline">{this.state.deadline}</div>
                    </div>
                )}
            </div>
        )
    }
}
