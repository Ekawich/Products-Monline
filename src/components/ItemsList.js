import React, { useEffect } from 'react';
import Card from './Card';
import DiscountTag from './DiscountTag';

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
                                <div className='d-flex'>
                                    {item.price_range.minimum_price.discount.percent_off === 0 ? <p className='fw-bold mb-0'>฿{item.price_range.minimum_price.regular_price.value}</p> : <p className='fw-bold text-danger mb-0'>฿{item.price_range.minimum_price.final_price.value}</p>}
                                    {item.price_range.minimum_price.discount.percent_off != 0 ? <p className='ms-2 text-decoration-line-through mb-0 opacity-75 mb-0'>฿{item.price_range.minimum_price.regular_price.value}</p> : ''}
                                </div>
                                {item.price_range.minimum_price.discount.percent_off != 0 ? <p className='fw-bold text-danger'>SAVE ฿{item.price_range.minimum_price.discount.amount_off}</p> : ''}
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