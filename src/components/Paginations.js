import React, { useEffect, useState } from 'react';
import Paginate from './Paginate';

function Paginations(props) {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        setTotalPages(Math.ceil(props.totalItems / props.limitPage))
    }, [props.totalItems, props.limitPage])

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
            props.changePages(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            props.changePages(currentPage - 1)
        }
    }

    const changePages = (page) => {
        setCurrentPage(page)
        props.changePages(page)
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination float-end mt-4">
                <li className="page-item">
                    <a className="page-link" aria-label="Previous" onClick={prevPage}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <Paginate numberPage={totalPages} currentPage={currentPage} changePages={changePages} />
                <li className="page-item">
                    <a className="page-link" aria-label="Next" onClick={nextPage}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Paginations;