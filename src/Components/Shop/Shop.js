import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import Select from '../Select/Select';
import './Shop.css'

const Shop = () => {
    const [laptops, setLaptops] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('laptop.json')
        .then(res => res.json())
        .then(data => setLaptops(data))
    }, []);

    const selectedItems = (laptop) =>{
        const newCart = [...cart , laptop];
        if(newCart.length === 5){
            return false;
        }
        setCart(newCart);
    }

    const chooseAgain = () =>{
       setCart([])
    }

   const random = (cart, setCart) =>{
        const rand = Math.floor(Math.random() * cart.length);
        // console.log(rand);
        const getValue = setCart([true, cart[rand].name]);
        console.log(getValue);
        // alert(getValue);
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
                <Select cart={cart}></Select>
                <button className='btn-container' onClick={ () => random(cart, setCart)}>
                    Choose 1 for me
                </button>
                <button className='btn-container' onClick={chooseAgain}>
                    Choose Again
                </button>
            </div>
        </div>
    );
};

export default Shop;