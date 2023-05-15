import React from 'react';

function Paginate(props) {
    return (
        Array.from(Array(props.numberPage)).map((item, idx) => {
            return <li className="page-item" key={idx}><a className="page-link" href="#">{idx + 1}</a></li>
        })
    );
}

export default Paginate;