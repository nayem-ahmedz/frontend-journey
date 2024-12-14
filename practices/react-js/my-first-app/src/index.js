import React, { useEffect, useState, useReducer, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './Todos';


function App(){
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const increment = () => {
    setCount((c) => c + 1);
  }
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, 'New Todos']);
  }, [todos]);
  return(
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count : {count}
        <button onClick={increment}> + </button>
      </div>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <div className='container border py-3'>
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
