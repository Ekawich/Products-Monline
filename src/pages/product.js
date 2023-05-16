import React, { useEffect, useState } from 'react';

const params = new URLSearchParams(window.location.search);
const sku = params.get('sku');

function Product(props) {
    const [product, setProduct] = useState('')

    useEffect(() => {
        fetchProduct(sku)
    }, [])

    const fetchProduct = async (sku) => {
        const response = await fetch("https://2oftzcdorsag57vyq4tuenuvru0dmlhz.lambda-url.ap-southeast-1.on.aws?sku=" + sku)
        const data = await response.json()
        console.log(data)
        setProduct(data)
    }

    return (
        <div className='container py-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                </ol>
            </nav>
        </div>
    );
}

export default Product;