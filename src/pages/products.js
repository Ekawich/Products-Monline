import React, { useEffect, useState } from 'react';
import Paginations from '../components/Paginations';
import ItemsList from '../components/ItemsList'

function Products(props) {
    const [products, setProducts] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const response = await fetch("https://p7clalenvrbbdvxkk2qbueutgu0srocj.lambda-url.ap-southeast-1.on.aws?page=" + currentPage + "&limit=12")
        const data = await response.json()
        console.log(data, currentPage)
        setProducts(data.items)
        setTotalPages(parseInt(data.meta.totalPages))
    }


    const nextPage = () => {
        if (currentPage < totalPages) {
            let pageNow = currentPage
            setCurrentPage(pageNow++)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            let pageNow = currentPage
            setCurrentPage(pageNow--)
        }
    }

    return (
        <div className='container py-5'>
            <ItemsList items={products} />
            <Paginations totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} />
        </div>
    );
}

export default Products;