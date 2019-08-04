import React from 'react';
import TodoList from './TodoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todo: ''
    }
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      todo: e.target.value
    })
  }

  handleClick = (e) => {
    // e.preventDefault();
    event.preventDefault();
    const newState = {...this.state};
    newState.todoList.push(newState.todo);
    newState.todo = '';
    console.log(newState);
    this.setState(newState);
    console.log(this.state);
  }

  render() {
    return(
    <div>
      <h2>
        A Fresh Homie TodoList
      </h2>
      <ul>
        <form onSubmit={this.handleClick}>
          <textarea></textarea>
          <div>
          <input type="text" onChange={this.handleChange}></input>
          </div>
        </form>
        Text Field
      </ul>
      <ul>
        <TodoList />
      </ul>
    </div>
    )
  }
}

export default App;