import React, { Component } from 'react'

export default class ToDoItem extends Component {
    render() {
        return (
            <div className="to-do-item" id={this.props.id}>
                <div className="item-edit">
                    <button className="delete" onClick={this.props.onClick}>x</button>
                    <button className="edit" onClick={this.props.onClick}>edit</button>
                </div>
                <div className="item-details"></div>
                <div className="item-deadline"></div>
            </div>
        )
    }
}
