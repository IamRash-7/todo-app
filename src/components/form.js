import React from 'react';

const Form = ({formval,setFormval,todo,setTodo,setStatus}) => {

    function valChange(e) {
        setFormval(e.target.value);
    }

    function valSubmit(e) {
        e.preventDefault();
        setTodo([
            ...todo, 
            { text:formval,
            completed: false,
            id: Math.random()*1000 }
        ]);
        setFormval('');
    }

    function statusChange(e) {
        setStatus(e.target.value);
    }

    return (
        <div>
            <form>
            <input onChange={valChange} value={formval} type="text" className="todo-input" />
            <button onClick={valSubmit} className="todo-button" type="submit"><i className='fa fa-plus'></i></button>
            <select onChange={statusChange} name="todos" className="filter-todo">   
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
            </select>
            </form>
        </div>
    )
}

export default Form;

