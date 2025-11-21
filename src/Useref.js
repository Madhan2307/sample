import React, { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Useref() {

    const [count, setCount]=useState(0)

    const doublecount= useMemo(()=>{
        return count*2
    },[count])
    
   const inputref = useRef(null)

   const focusInput = ()=>{
    inputref.current.focus();
   }

   const [num , setNum]=useState(0)

   const handleIncrement=()=>{
    setNum(num+1)
   }
    const navigate= useNavigate()

    const goto = ()=>{
        navigate('/')
    }
  return (
    <div>
        <div>
            <input type='text' ref={inputref} placeholder='type any'/>
            <button onClick={focusInput}>focus input</button>
            <h1>{num}</h1>
            <h1>count:{count}</h1>
            <h2>double:{doublecount}</h2>
            <button onClick={handleIncrement}>+</button>
            <button type='number' onClick={()=>setCount(count+1)}>increase</button>
            <button onClick={goto}>go</button>
        </div>
    </div>
  )
}

export default Useref