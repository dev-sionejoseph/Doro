import React, { Component } from 'react'
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
    constructor(props){
        super(props);
        
        this.state={
            title:"Title" ,
            listID: null,
            itemnum: 0

        }
        this.mapItems = this.mapItems.bind(this);
    }

    // mapItems({ list }){
    //     let itemIDFormat = `${listID}${this.state.itemnum}` 
    // }

    componentDidMount({ list }){
        
        this.setState({
            title: list.title,
            listID: list.id,
            itemnum: Object.keys(list.items).length
        })

    }
    render({...list}) {

        const addedItems = list.items.map(item => {
            return <ToDoItem item={...item}/>
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
                    {addedItems}
                </div>
            </div>
        )
    }
}
