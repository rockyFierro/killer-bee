import React from 'react'

const Todo = props => {
        return (
            <p
            className={ props.finished ? "complete" : "incomplete"  }
            >
                {console.log("src>comp>todo>",props)}
                {props.task}
            </p>
        )
}

export default Todo;

