import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import './Shop.css'

const Shop = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(()=>{
        fetch('laptop.json')
        .then(res => res.json())
        .then(data => setLaptops(data))
    }, []);

    const selectedItems = (laptop) =>{
        console.log(laptop);
    }
    return ( 
        <div className='shop-container'>
            <div className='laptops-container'>
                {
                    laptops.map(laptop => <Laptop
                    key={laptop.id}
                    laptop={laptop}
                    selectedItems={selectedItems}
                    ></Laptop>)
                }
            </div>
            <div className='cart-container'>
                <h2>This is for order summary</h2>
            </div>
        </div>
    );
};

export default Shop;