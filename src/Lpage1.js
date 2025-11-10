import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "./Home.scss"


function Lpage1(props) {

  let numbers =[1,2,3,4,5]
  console.log(numbers);

  let newnumbers=[...numbers ,6,7,8]
  console.log(newnumbers);
  
  
  const [oldname, setOldName] = useState(localStorage.getItem("name"))
  useEffect(() => {
    toast.success("welcome  " + oldname)
  }, [])
   
  const [data , setData]= useState(true)

  const handleChange=()=>{
     setData(!data)
  }
  const [black , setBack]=useState(false)

  const handlecolor=()=>{
    setBack(!black)
  }

  return (
    <div>
      <div className={black ? "lightmode":"darkmode"}>
        <ToastContainer />
        <h1>{data ? "user in valid" :"user is in invalid"}</h1>
        <button onClick={handleChange}>change</button>
        <button onClick={handlecolor}>mode</button>
      </div>
    </div>  
  )
}
export default Lpage1