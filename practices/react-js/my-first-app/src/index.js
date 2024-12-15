import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  const [input, setInput] = useState('');
  const Fruits = ['Apple', 'Mango', 'Banana'];
  const [fruits, setFruits] = useState(Fruits);
  function handleSubmit(){
    if(input.trim()){
      // setFruits((prev) => ([...prev, input]))
      setFruits((prev) => {
        return [...prev, input]
      });
      setInput('');
    } else{
      alert('Empty field');
    }
  }
  return(
    <>
      <h1>App</h1>
      <ul>
        {
          fruits.map((fruit, index)=> <li key={index}>{fruit} at index {index}</li>)
        }
      </ul>
      <input type='text' value={input || ''} onChange={(e) => setInput(e.target.value)} />
      <input type='submit' onClick={handleSubmit} value='submit' />
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
