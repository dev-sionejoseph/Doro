import React, { Component } from 'react'
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
    constructor(props){
        super(props);
        
        this.state={
            title:"Title" ,
            listID: null,
            itemnum: 0,
            details:'',
            deadline:'',
            adding:false,
            editing:false,
            error:''
        }
        this.addItem = this.addItem.bind(this);
        this.submitItem = this.submitItem.bind(this);
        this.editList = this.editList.bind(this);
        this.deleteList = this.deleteList.bind(this);
    }

    submitItem(){

        let User = fireINIT.auth().currentUser
        
        this.setState({
            itemnum: this.state.itemnum+=1,
            adding:false
        })
        
        axios.post(`/doro/users/${User.uid}/${this.state.listID}/new-item`,{
            id:`${this.state.listID}${this.state.itemnum}`,
            details: this.state.details,
            deadline: this.state.deadline,
            list_id: this.state.listID
        })
        .catch((error)=>{
             this.setState({
                 error:"error: not added"
             });
        });
    }

    editList(){

    }

   deleteList(){

   }

    componentDidMount(){
        let list= this.props.list

        this.setState({
            title: list.title,
            listID: list.id,
            itemnum: Object.keys(list.items).length
        })
    
    }
    render() {

        let list = this.props.list
        const addedItems = list.items.map(item => {
            return <ToDoItem item={ item }/>
        })

        return (
            <div className="to-do-list">
                <div className="list-title-bar">
                    <div className="list-edit">
                        <button className="delete">x</button>
                        <button className="edit">edit</button>
                    </div>
                    <div className="title"> {this.state.title} </div>
                </div>
                <div className="item-container">
                    <button className="add-item">+</button>
                    {iteminputs}
                    {addedItems}
                </div>
            </div>
        )
    }
}
