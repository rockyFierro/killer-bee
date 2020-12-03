import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
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
  /*add task:
  addTask is a callback that gets passed to the form - in the form it is used to handle submission - a handler in form passes it the submit event and the forms internal state (user input) and add task uses that argument to create a new object, it adds an id and a boolean then appends the object to app state.
  */
  addTask = (event, task) => {
    event.preventDefault();
    console.log("adding task:", task);
    const addTask = {
      task: task,
      id: Date.now(),
      finished: false
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, addTask]
    })
  }
  //toggle finished
  markFinished = (taskID) => {
    console.log("marking finished:", taskID);
    this.setState({
      ...this.state,
      todos: this.state.todos.map(
        (task) => {
          if (task.id === taskID) {
            return {
              ...task,
              finished: !task.finished
            };
          } else {
            return task;
          }
        }
      )
    })
  }
  //clear task
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.todos} markFinished={this.markFinished} />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
