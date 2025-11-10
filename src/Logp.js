import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function Logp() {

  const [uname, setName] = useState('')
  const [password, setPass] = useState('')

  const [oldname, setOldName] = useState(localStorage.getItem("name"))
  const [oldpass, setOldPass] = useState(localStorage.getItem("password"))

  const handleLogin = (e) => {
    e.preventDefault()
    if (uname == oldname && password == oldpass) {
      toast.success("login success")
      setTimeout(() => {
        window.location.href = '/loginpage1'
      }, 2000)
    } else {
      toast.error("enter the correct name and password")
    }

  }
    
  let obj = {name:"my name", stack :"front"}

  return (
    <div>
      <ToastContainer />
      <h1> {obj.stack}</h1>
      <h1>
        login page
      </h1 >
      <div>
        <form onSubmit={handleLogin}>
          <input type='name' placeholder='enter the number' value={uname} onChange={(e) => setName(e.target.value)} />
          <input type='password' placeholder='enter your nuber' value={password} onChange={(e) => setPass(e.target.value)} />
          <button type='submit'>
            login
          </button>
        </form>
      </div>
    </div>
  )
}
