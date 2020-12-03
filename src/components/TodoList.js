import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {console.log("src>comp>todolist>",props)}
            {props.tasks.map(
                todo => {
                   return <Todo key={todo.id} id={todo.id} finished={todo.finished} task={todo.task} markFinished={props.markFinished}/>
                }
            )}
        </div>
    )
}

export default TodoList;



//receives the Todos array and iterates over the list generating a new <Todo/> for each element in the array

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
