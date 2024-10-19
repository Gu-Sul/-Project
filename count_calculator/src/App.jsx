// 사칙연산 카운터
// 인풋의 정해진 숫자만큼
// 증가 감소 나누기 곱하기 
// 다음주 수요일까지
// 본인 깃허브에 업로드 후 깃허브 주소 가져오기


import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const inputRef = useRef(null)


  return (
    <>
    <input ref={inputRef} />
    <button onClick={() => {setCounter(counter + Number(inputRef.current.value))}}>+</button>
    <button onClick={() => {setCounter(counter - Number(inputRef.current.value))}}>-</button>
    <button onClick={() => {setCounter(counter * Number(inputRef.current.value))}}>*</button>
    <button onClick={() => {setCounter(counter / Number(inputRef.current.value))}}>/</button>
    <button onClick = {()=>setCounter(0)}>C</button>
    <div>{counter}</div>
    </>
  )
}



export default App
