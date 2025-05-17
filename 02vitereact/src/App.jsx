import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue=()=>{
    counter=counter+1;
    setCounter(counter);
  }
  const decreaseValue=()=>{
    counter=counter-1;
    if(counter<0){
      counter=0;
    }
    setCounter(counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>AddValue: {counter}</button> 
     <br/>
     <button onClick={decreaseValue}>DecreaseValue: {counter}</button>
     <p>footer :{counter}</p>
    </>
  )
}

export default App
