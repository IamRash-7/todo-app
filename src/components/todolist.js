import React from 'react';

import Todo from './todos';
const Todolist = ({todo,setTodo,filter}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list" >
                {filter.map(t=>
                    <Todo key={t.id} t={t} text={t.text} setTodo={setTodo} todo={todo} />)
                }
            </ul>
        </div>
    )
}

export default Todolist;
