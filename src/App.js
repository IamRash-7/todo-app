import React,{useState,useEffect} from 'react';

import './App.css';

import Form from './components/form';
import Todolist from './components/todolist';

function App() {

  const [todo, setTodo] = useState([]);
  const [formval, setFormval] = useState('');
  const [status, setStatus] = useState('all');
  const [filter, setFilter] = useState([]);

  useEffect(()=>{
    function filterArray() {
      switch(status){
        case 'completed':
          setFilter(todo.filter(t => t.completed===true));
          break;
        case 'uncompleted':
          setFilter(todo.filter(t => t.completed===false));
          break;
        default:
          setFilter(todo);
          break;
      }
    };
    filterArray();
  }, [todo,status]);

  
  return (
    <div className="App">
      
      <div className='header'>
      <img src="./homework.png" alt="Logo" width="100" height="100"/>
        <h1>Todo-App</h1>
      </div>
      <Form formval={formval} setFormval={setFormval} todo={todo} setTodo={setTodo} setStatus={setStatus} />
      <Todolist todo={todo} setTodo={setTodo} filter={filter}/>
    </div>
  );
}

export default App;
