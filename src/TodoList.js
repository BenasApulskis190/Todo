import React, { Component } from 'react';
import Todo from './Todo';
import uuid from 'uuid';
import NewToDoForm from './NewToDoForm';
import './TodoList.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDos: [
        {
          id: uuid(),
          taskName: 'awdawd',
          isDone: false,
        },
        {
          id: uuid(),
          taskName: 'awdawd',
          isDone: false,
        }
      ]
    };

    this.removeTask = this.removeTask.bind(this);
    this.renderTasks = this.renderTasks.bind(this);
    this.addItem = this.addItem.bind(this);
    this.saveTasks = this.saveTasks.bind(this);
  }

  renderTasks() {
    return this.state.toDos.map(task => (
      <Todo
        key={task.id}
        id={task.id}
        isDone={task.isDone}
        taskName={task.taskName}
        removeTask={this.removeTask}
      />
    ));
  }

  removeTask(id) {
    this.setState(state => ({toDos: [...state.toDos.filter(task => task.id !== id)]}));
    this.saveTasks();
  }

  saveTasks() {
    // this.state
  }

  addItem(item) {
    item.id = uuid();
    item.isDone = false;
    this.setState(state => ({
      toDos: [...state.toDos, item]
    }))
  }

  render() {
    return (
      <div className='TodoList'>
        {this.renderTasks()}
        <NewToDoForm addItem={this.addItem} saveTasks={this.saveTasks}/>
      </div>
    );
  }
}

export default TodoList;
