import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


function Lpage1() {
  const [oldname, setOldName] = useState(localStorage.getItem("name"))
  useEffect(() => {
    toast.success("welcome  " + oldname)
  }, [])
  return (
    <div>
      <ToastContainer />
      <h1>hi</h1>
    </div>
  )
}

export default Lpage1