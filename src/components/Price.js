import React from 'react';

function Price(props) {
    return (
        <div>
            <div className='d-flex'>
                {props.discount === 0 ? <p className='fw-bold mb-0'>฿{props.price}</p> : <p className='fw-bold text-danger mb-0'>฿{props.finalPrice}</p>}
                {props.discount != 0 ? <p className='ms-2 text-decoration-line-through mb-0 opacity-50 mb-0'>฿{props.price}</p> : ''}
            </div>
            {props.discount != 0 ? <p className='fw-bold text-danger'>SAVE ฿{props.discountOff}</p> : ''}
        </div>
    );
}

export default Price;