import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Components/Cards';

const Products = () => {
    const alldata = useLoaderData()
    console.log(alldata);
    return (
        <div className='my-5'>
            <h2 className='text-4xl text-center font-bold'>All Available Products</h2>
         <div className='grid grid-cols-4 gap-5 my-4'>
         {
            alldata.map((product, idx) => <Cards key={idx} categorydata={product}></Cards>)
         }
         </div>
        </div>
    );
};

export default Products;