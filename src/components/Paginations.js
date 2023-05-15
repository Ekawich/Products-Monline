import React, { useEffect } from 'react';
import Paginate from './Paginate';

function Paginations(props) {
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" aria-label="Previous" onClick={props.prevPage}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <Paginate numberPage={props.totalPages} />
                <li className="page-item">
                    <a className="page-link" aria-label="Next" onClick={props.nextPage}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Paginations;