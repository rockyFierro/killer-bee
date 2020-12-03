import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: []//the array of tasks
    }
  }
  //handler functions will be here
  //handleChanges//nope
  //handleSubmit//nope
  //add task
  addTask = (event, task) => {
    event.preventDefault();
    console.log("adding task:", task);
    const addTask = {
      task:task,
      id:Date.now(),
      finished:false
    };
    this.setState({
      ...this.state,
      todos: [this.state.todos, addTask]
    })
  }
  //clear task
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
