import React from 'react';

function Paginate(props) {
    return (
        Array.from(Array(props.numberPage)).map((item, idx) => {
            return <li className={`page-item ${props.currentPage === idx + 1 ? 'active' : ''}`} key={idx}><a className="page-link" onClick={() => props.changePages(idx + 1)}>{idx + 1}</a></li>
        })
    );
}

export default Paginate;