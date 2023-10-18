import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../Shared/Header';
import CartProductCard from './CartProductCard';

const MyCartPage = () => {

    const cart= useLoaderData();
    const[products,setProducts]=useState(cart);

    console.log("This is cart",products );
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-4xl font-bold'>My Cart</h1>

            <div className='grid lg:grid-cols-2 grid-cols-1'>

                {
products.map((product,idx)=><CartProductCard cartproducts={products} setProducts={setProducts} key={idx} product={product}/>)



                }



            </div>
        </div>
    );
};

export default MyCartPage;