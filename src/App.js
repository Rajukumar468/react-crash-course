import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from  'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid'
import Header from './layout/Header';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Meet with friends',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Bring Chocklates for kids',
        completed: true
      }, {
        id: uuid.v4(),
        title: 'Plan Candle dinner',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Book movie ticket',
        completed: true
      }
    ]
  }

  /** Toggle Mark */
  markComplete = (id) => {
    console.log('id', id);

    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })

  }

  deleteTodo = (id) => {
    console.log('delet', id);

    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });

    console.log('state', this.state.todos);

  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    console.log('', this.state.todos);

    return (
      <Router>
    <div className="App" style={{ backgroundColor: '#3c333047' }}>
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
          </React.Fragment>
        )}/>

        <Route path="/about" component={About} />
        
      </div>
      </Router>
  );
  }
}

export default App;
