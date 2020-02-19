import React, { Component } from 'react';
import './Todo.scss';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDone: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  static defaultProps = {
    isDone: false,
  };

  handleClick(evt) {
    const id = evt.target.parentNode.id;
    this.props.removeTask(id);
  }

  completeTask() {
    this.setState({
      isDone: !this.state.isDone
    });
  }

  render() {
    return (
      <div className='Todo' id={this.props.id} onClick={this.completeTask}>
        <p className={this.state.isDone && 'done' }>{this.props.taskName}</p>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default Todo;
