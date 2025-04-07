import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () =>{
    counter = counter + 5
    setCounter(counter) 
  }

  const minusValue = () =>{
    counter = counter - 5
    if (counter <= 0) {
      setCounter(counter = 0)
     }else{
      setCounter(counter)
     }
  }


  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Up count</button>
      <button onClick={minusValue}>Down count</button>
    </>
  )
}

export default App
