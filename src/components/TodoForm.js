import React from 'react';
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ""
        };
    }
    handleChange = event => {
        this.setState({
            ...this.state,
            newTask: event.target.value
        });
    }
    handleSubmit = (event) => {
        this.props.addTask(event, this.state.newTask);
        this.setState({
            newTask: ""
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="newTask">
                    New Task:{' '}
                    <input
                        value={this.state.newTask}
                        onChange={this.handleChange}
                        name="newTask"
                        type="text" />
                </label>
                <button>Add Additional Task</button>
            </form>
        )
    };
}
export default TodoForm;