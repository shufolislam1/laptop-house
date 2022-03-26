import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Laptop.css'

const Laptop = (props) => {
    const {name, img, price} = props.laptop;
    return (
        <div className='laptops-img-container'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <button onClick={ () => props.selectedItems(props.laptop)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>   
            </button>
        </div>
    );
};

export default Laptop;