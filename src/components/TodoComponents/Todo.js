import React from 'react';

const Todo = (props) => {
    // let completed = props.todo.completed ? " completed" : "";
    return (
        <div className='d'>
            <p>{props.propsTodo.task}</p>
        </div>
    )
}

export default Todo;