import React, { useEffect } from 'react';
import Card from './Card';
import DiscountTag from './DiscountTag';
import Price from './Price';

function ItemsList(props) {
    if (!props.items) {
        return
    }

    return (
        <div className='row g-4'>
            {props.items.map((item, idx) => {
                return <div className='col-lg-3 col-md-4 col-6' key={idx}>
                    <Card>
                        <div className='card-header p-0 border-0 border-bottom' style={{ cursor: 'pointer' }}>
                            <a href={`/product?sku=` + item.sku}>
                                <div className='position-relative'>
                                    <img src={item.image.url} width="100%" className='product-img' />
                                    <DiscountTag discount={item.price_range.minimum_price.discount.percent_off} />
                                </div>
                            </a>
                        </div>
                        <div className='card-body px-3 border-0' style={{ cursor: 'pointer' }}>
                            <a href={`/product?sku=` + item.sku}>
                                <p className='fw-bold mb-1'>{item.brand.name}</p>
                                <p className='product-name'>{item.image.label}</p>
                                <Price discount={item.price_range.minimum_price.discount.percent_off} price={item.price_range.minimum_price.regular_price.value} finalPrice={item.price_range.minimum_price.final_price.value} discountOff={item.price_range.minimum_price.discount.amount_off} />
                            </a>
                        </div>
                        <div className='card-footer p-2 border-0 bg-white'>
                            <button type='button' className='btn btn-outline-dark w-100'>Add to Cart</button>
                        </div>
                    </Card>
                </div>
            })}
        </div>
    );
}

export default ItemsList;