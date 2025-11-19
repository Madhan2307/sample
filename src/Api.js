import React, { useEffect, useState } from 'react'

function Api() {

const [data , setData]=useState([])

useEffect(()=>{
    fetch('https://api.github.com/users/hacktivist123')
    .then(responce =>{
        if (!responce.ok){
            throw new Error("network responce was not ok")
        }
        return responce.json();
    })
    .then(answer => {
        console.log(answer,"datasss");
        setData(answer)
    })

    .catch (error=> {
        console.error("error",error)
        
    });
},[]
)


  return (
    <div>
        <h1>{data.bio}</h1>
    </div>
  )
}

export default Api