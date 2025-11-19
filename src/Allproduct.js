import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, divideNumber, modulusNumber, multiplyNumber, subNumber } from './Redux/action';


const Allproduct = ()=> {

    const dispatch=useDispatch();
    const addResult = useSelector((state)=> state.add.result);
    const subractResult = useSelector ((state)=>state.Subtract.result);
    const multiplyResult = useSelector ((state)=>state.multiply.result);
    const divideResult=useSelector((state)=>state.divide.result);
    const modulusResult=useSelector((state)=>state.modulus.result);

  return (
    <div>
        <h2>redux counter</h2>

        <h3>add reult:{addResult}</h3>
        <button onClick={()=>dispatch(addNumber(5))}>add 5</button>

        <h3>subract result:{subractResult}</h3>
        <button onClick={()=>dispatch(subNumber(5))}>add 5</button>

        <h3>multiply result:{multiplyResult}</h3>
        <button onClick={()=>dispatch(multiplyNumber(5))}>add 5</button>

        <h2>divide result:{divideResult}</h2>
        <button onClick={()=>dispatch(divideNumber(5))}>add 5</button>

        <h2>modulus result:{modulusResult}</h2>
        <button onClick={()=>dispatch(modulusNumber(5))}>add 5</button>

    </div>
  )
}

export default Allproduct