import React from 'react';

function Card(props) {
    return (
        <div className='card shadow-lg h-100 border-0'>
            {props.children}
        </div>
    );
}

export default Card;