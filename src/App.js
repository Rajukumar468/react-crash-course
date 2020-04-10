import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      { 
        id :1,
        title: 'Title 1',
        completed: false
      },
      { 
        id :2,
        title: 'Title 2',
        completed: true
      },{ 
        id :3,
        title: 'Title 3',
        completed: false
      },
      { 
        id :4,
        title: 'Title 4',
        completed: true
      }
    ]
  }

 render() {
   console.log('', this.state.todos);
   
  return (
    
    <div className="App">
      <Todos todos={this.state.todos}/>
    </div>
  );
}
}

export default App;
