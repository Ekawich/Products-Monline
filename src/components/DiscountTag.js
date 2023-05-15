import React from 'react';

function DiscountTag(props) {
    return (
        <div div className={`bg-danger p-1 position-absolute top-0 end-0 text-white discount-tag + ${props.discount != 0 ? 'd-block' : 'd-none'}`} >
            <p className='mb-0'>Saved</p>
            <p className='mb-0 discount'>{props.discount}%</p>
        </div>
    );
}

export default DiscountTag;