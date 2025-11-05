import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
 

export default function Signp() {

    const [myname, setName] = useState('')
    const [password, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const handleSubmits = (e) => {
        e.preventDefault()
        if (myname == '' || password == ''  || email == '' || number == '') {
            toast.error("fill the details")
        } else {
            toast.success("signup success")
            localStorage.setItem("name", myname)
            localStorage.setItem("password", password)
            setTimeout(() => {
                window.location.href = '/loginpage'
            }, 3000)
        }
    }
    return (
        <div>
            <ToastContainer/>
            <div>
                <form onSubmit={handleSubmits}>
                    <h1>
                        sign up
                    </h1>
                    <input type='myname' placeholder='type ypur name' value={myname} onChange={(e) => setName(e.target.value)} />
                    <input type='password' placeholder='enter your password' value={password} onChange={(e) => setPass(e.target.value)} />
                    <input type='email' placeholder='enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='number' placeholder='enter your phone number' value={number} onChange={(e) => setNumber(e.target.value)} />
                    <button type='submit'>sign up</button>
                </form>
            </div>
        </div>
    )
}
