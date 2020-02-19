import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoList/>
      </div>
    );
  }
}

export default App;
