import { useRef, useState } from 'react'

import './App.css'

const App: React.FC= () => {
  const [counter, setCounter] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)  
  const getInputValue = (): number => {
    const value = inputRef.current ? Number(inputRef.current.value) : 0
      if (Number.isNaN(value)){
        alert('유효한 숫자를 입력하세요!')
        return 0
      }
      return value
  
  }

  return (
    <>
    <input ref={inputRef} />
    <button onClick={() => {setCounter(counter + getInputValue())}}>+</button>
    <button onClick={() => {setCounter(counter - getInputValue())}}>-</button>
    <button onClick={() => {setCounter(counter * getInputValue())}}>*</button>
    <button onClick={() => {setCounter(counter / getInputValue())}}>/</button>
    <button onClick = {()=>setCounter(0)}>C</button>
    <div>{counter}</div>
    </>
  )
}


export default App
