import React from 'react';
import './Select.css'

const Select = (props) => {
    const {cart} = props;

    let Display = cart.map(info => {
        return (
            <h1>{info.name}</h1>
        )
    })

    return (
        <div className='cart'>
            {Display}
        </div>
    );
};

export default Select;