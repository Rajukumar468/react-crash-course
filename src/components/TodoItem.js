import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed? 'line-through' : 'none',
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                <input type="checkbox" onChange={ this.props.markComplete.bind(this, id)} /> { title } { ' '}
                <button style={btnStyle} onClick={ this.props.deleteTodo.bind(this, id) }> X </button></p>
                
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

const btnStyle = {
    background: '#ff0000',
    color: '#ffffff',
    cursor: 'pointer',
}

export default TodoItem
