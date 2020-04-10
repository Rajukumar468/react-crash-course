import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        console.log('to', this.props.todos);
        return (this.props.todos.map((data) => (
            <TodoItem key={data.id} todo={data} markComplete = { this.props.markComplete } deleteTodo = { this.props.deleteTodo}/>
        )));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default Todos;
