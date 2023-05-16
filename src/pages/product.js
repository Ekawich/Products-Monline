import React, { useEffect, useState } from 'react';
import Price from '../components/Price';
import DiscountTag from '../components/DiscountTag'
import { FaRegHeart, FaRegListAlt, FaAngleUp, FaAngleDown, FaCheckSquare, FaShoppingBag, FaFacebook, FaLine, FaTwitterSquare } from "react-icons/fa";;


const params = new URLSearchParams(window.location.search);
const sku = params.get('sku');

function Product(props) {
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState(1)

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
            <div className='row g-5'>
                <div className='col-lg-5'>
                    <div>
                        <div id="carouselExample" className="carousel carousel-dark slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className='position-relative'>
                                        {product ? <img src={product.image.url} className="d-block w-100" alt={product.image.label} /> : ''}
                                        {product ? <DiscountTag discount={product.price_range.minimum_price.discount.percent_off} /> : ''}
                                    </div>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div>
                            {product ? <img src={product.small_image.url} style={{ width: "" }} className='w-25 border' /> : ''}
                        </div>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <div>
                        {product ? <p className='fs-2 text-decoration-underline'>{product.brand.name}</p> : ''}
                        {product ? <p className='fs-6 fw-bold'>{product.image.label}</p> : ''}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante tortor, placerat at urna in, accumsan hendrerit neque. Duis pharetra.</p>
                        {product ? <Price discount={product.price_range.minimum_price.discount.percent_off} price={product.price_range.minimum_price.regular_price.value} finalPrice={product.price_range.minimum_price.final_price.value} discountOff={product.price_range.minimum_price.discount.amount_off} /> : ''}
                        <div className='d-sm-flex justify-content-between d-block text-decoration-underline mb-4'>
                            <p>Be the first to review</p>
                            <p><FaRegListAlt className='me-2' /> Add to Compare</p>
                            <p><FaRegHeart className='me-2' />Save to Withlist</p>
                        </div>
                        <div>
                            <div className='border-bottom border-dark d-flex py-2'>
                                <p className='fw-bold mb-0'>Sold By:</p>
                                <p className='mb-0'>The Mall Group</p>
                            </div>
                            <div className='border-bottom border-dark d-flex py-2 mb-4'>
                                <p className='mb-0 me-4'>Quantity</p>
                                <p className='mb-0'>{quantity}</p>
                                <div className='d-flex ms-auto align-items-center'>
                                    <FaAngleUp className='me-2' onClick={() => setQuantity(quantity + 1)} />
                                    <FaAngleDown onClick={() => setQuantity(quantity - 1)} />
                                </div>
                            </div>
                            <div className='d-sm-flex justify-content-between d-block mb-4'>
                                <div>
                                    <p className='mb-2'><FaCheckSquare className='me-4' />
                                        FREE STANDARD DELIVERY</p>
                                    <p className='mb-2'><FaCheckSquare className='me-4' />

                                        0% INSTALLMENT</p>
                                </div>
                                <div>
                                    <p className='mb-2'><FaCheckSquare className='me-4' />
                                        EARN M POINT</p>
                                    <p className='mb-2'><FaCheckSquare className='me-4' />
                                        RETURN&EXCHANGE IN 14DAYS*</p>
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-dark w-100 mb-3'>
                                    <FaShoppingBag className='me-2' />Add to Bag
                                </button>
                                <p className='fw-bold d-flex justify-content-center'><p className='text-primary me-2'>FREE</p>  standard delivery (no mininum)</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='mb-0 fs-5'>share</p>
                                <FaFacebook className='fs-5 mx-2' />
                                <FaTwitterSquare className='fs-5 mx-2' />
                                <FaLine className='fs-5 mx-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;