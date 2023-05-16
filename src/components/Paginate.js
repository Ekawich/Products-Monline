import React from 'react';

function Paginate(props) {
    return (
        Array.from(Array(props.numberPage)).map((item, idx) => {
            return <li className={`page-item ${props.currentPage === idx + 1 ? 'active' : ''}`} key={idx}><a className="page-link">{idx + 1}</a></li>
        })
    );
}

export default Paginate;