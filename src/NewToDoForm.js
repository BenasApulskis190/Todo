import React, { Component } from 'react';
import './NewToDoForm.scss';

class NewToDoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const item = {
      taskName: this.state.taskName
    };
    this.props.addItem(item);
    this.props.saveTasks();
    this.setState({
      taskName: ''
    })
  };

  handleInput(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <div className='NewToDoForm'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='taskName' value={this.state.taskName} onChange={this.handleInput}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewToDoForm;
