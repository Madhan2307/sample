import React, { useState } from 'react'
import Header from './common/Header'
import { ToastContainer, toast } from 'react-toastify';

function Enter() {
  // const [num, setNum] = useState(0)
  // const [letter, setLetter] = useState("hi")

  // const handleadd = () => {
  //   setNum(num + 1)
  // }

  // const handlesub = () => {
  //   setNum(num - 1)
  // }

  // const nextpage = () => {
  //   window.location.href = "/"
  // }

  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault()

    if (name == '' || pass == '') {
      toast.error("fill the details ")
    }
    else {
      toast.success("login success")
      setTimeout(()=>{
            window.location.href = "/cardpage"
      },3000)
    }
  }


  return (
    <div>
      {/* <Header />
      <h1>{num}</h1>
      <button onClick={handlesub}>-</button>
      <button onClick={handleadd}>+</button>
      <h2>{letter}</h2>
      <a href='/cardpage'>
        <button>go card</button>
      </a>

      <button onClick={nextpage}>next page</button><br /> */}

      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input type='name' placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='password' placeholder='enter password' value={pass} onChange={(e) => setPass(e.target.value)} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Enter