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
        <div className='container'>
            <img src={product.image.url} />
        </div>
    );
}

export default Product;