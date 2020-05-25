import React, { Component } from 'react'

export default class ToDoItem extends Component {
    render() {
        return (
            <div className="to-do-item" id={this.props.id}>
                <div className="item-edit">
                    <button name="delete" onClick={this.props.onClick}>x</button>
                    <button name="edit" onClick={this.props.onClick}>edit</button>
                </div>
                <div id="item-details"></div>
                <div id="item-deadline"></div>
            </div>
        )
    }
}
