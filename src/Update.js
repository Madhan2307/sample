import React, { useState } from 'react'
import Product from './Product';

function Update() {

    const [updatestatus, setUpdatestatus] = useState(null);
    const[id , setId] = useState(null)

    const updateproduct = async (Productid, updatedProductData) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${Productid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProductData),
            });


            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            const result = await response.json();
            setUpdatestatus(result.message);
        } catch (error) {
            console.error('Error updating product:', error.message);
            setUpdatestatus('Error: ' + error.message);
        }
    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
        const productdata = {
            tittle: formdata.get('tittle'),
            price: parseFloat(formdata.get('price')),
            stock: parseFloat(formdata.get('stock')),
            rating: parseFloat(formdata.get('rating')),
            description: formdata.get('description'),
            brand: formdata.get('brand'),
            category: formdata.get('category'),
  
        }
        await updateproduct(id, productdata);

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='tittle' placeholder='tittle' />
                <input type='number' name='price' placeholder='price' />
                <input type='number' name='stock' placeholder='stock' />
                <input type='number' name='rating' placeholder='rating' />
                <textarea name='description' placeholder='description' />
                <input type='text' name='brand' placeholder='brand' />
                <input type='text' name='category' placeholder='category' />
                <input type='number' name='id' placeholder='id' value={id} onChange={(e)=>setId(e.target.value)}/>

                <button type='submit'>submit</button>
            </form>

        </div >
    )
}


export default Update