import React from 'react';
import './Laptop.css'

const Laptop = (props) => {
    const {name, img, price} = props.laptop
    return (
        <div className='laptops-img-container'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <button onClick={ () => props.selectedItems(props.laptop)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Laptop;