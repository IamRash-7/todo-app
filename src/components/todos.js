import React from 'react'

const Todos = ({text, t , todo, setTodo}) => {

    function deleteTodo() {
        setTodo(todo.filter((ele)=>ele.id!==t.id))
    }
    function compelteTodo() {
        setTodo(todo.map((ele)=>{
            if(ele.id===t.id){
                return{
                    ...ele,
                    completed:!ele.completed
                };
            }
            return ele;
        })
        );
    }

    return (
        <div className='todo'>
            <li className={`todo-ele ${t.completed ? "completed":'' }`}>{text}</li>
            <button className='todo-com' onClick={compelteTodo}><i className='fa fa-check'></i></button>
            <button className='todo-del' onClick={deleteTodo}><i className='fa fa-times'></i></button>
        </div>
    )
}

export default Todos
