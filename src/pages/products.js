import React, { useEffect, useState } from 'react';
import Paginations from '../components/Paginations';
import ItemsList from '../components/ItemsList'

function Products(props) {
    const [products, setProducts] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalItems, setTotalItems] = useState(1)
    const [limitPage, setLimitPage] = useState(12)

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [currentPage])

    const changePages = (page) => {
        setCurrentPage(page)
    }

    const fetchProducts = async () => {
        const response = await fetch("https://p7clalenvrbbdvxkk2qbueutgu0srocj.lambda-url.ap-southeast-1.on.aws?page=" + currentPage + "&limit=" + limitPage)
        const data = await response.json()
        console.log(data, currentPage)
        setProducts(data.items)
        setTotalItems(parseInt(data.meta.totalItems))
    }

    return (
        <div className='container py-5'>
            <ItemsList items={products} />
            <Paginations totalItems={totalItems} limitPage={limitPage} changePages={changePages} />
        </div>
    );
}

export default Products;