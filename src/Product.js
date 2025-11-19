import React, { useState } from 'react'

function Product() {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [dis, setDis] = useState('')
    const [cat, setCat] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name: name,
            price: number,
            description: dis,
            category: cat
        };
        const request={
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        };

        try{
            const response = await fetch('https://dummyjson.com/products/add',request);
            if (response.ok){
                throw new Error ("failed to add product");
            }
            const result = await response.json();
            console.log("product added succesfully",result);
            
        }catch (error){
            console.log("error adding prodict",error.message);
            
        }
        
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>product</h1>
                    <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /><br/>
                    <input type='number' placeholder='price' value={number} onChange={(e) => setNumber(e.target.value)} /><br/>
                    <textarea type='text' placeholder='ddescription' value={dis} onChange={(e) => setDis(e.target.value)} /><br/>
                    <input type='text' placeholder='category' value={cat} onChange={(e) => setCat(e.target.value)} /><br/>
                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default Product