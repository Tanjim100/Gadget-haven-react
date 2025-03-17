import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const ProductDetails = () => {

    const { product_id } = useParams();

    const id = parseInt(product_id);


    const info = useLoaderData();

    const product = info.find(item => item.product_id === id);

    const { product_title, product_image, category, price, description, Specification, availability, rating } = product;

    console.log(product);

    return (
        <div className='grid'>
            <div className='p-10 px-80 bg-purple-600 text-white text-center absolute'>
                <h1 className='text-3xl font-bold'>Product Details</h1>
                <p className='p-5 mb-36'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className=' flex justify-center mb-60'>
                <div className='top-48 w-[1024px] flex justify-around border-2 gap-4 py-6 px-6 rounded-3xl bg-gray-100 relative'>
                    <div className=' bg-gray-300 rounded-2xl w-2/5 p-10 mr-5 '>
                        image
                    </div>
                    <div className=' w-3/5 space-y-4'>
                        <h2 className='text-3xl font-bold'>{product.product_title}</h2>
                        <p className='font-semibold'>Price: ${price}</p>
                        <p className='text-sm  border-2 w-16 text-green-500 bg-green-100 text-center border-green-500 rounded-xl'>{availability ? 'In ' : 'Out of '} Stock </p>
                        <p className='text-gray-500'>{description}</p>
                        <h4 className='text-xl font-semibold'>Specifications:</h4>
                        <div>
                            {
                                Specification.map((feature) => <li>{feature}</li>)
                            }
                        </div>
                        <div className='flex gap-2'>
                            <Rating
                                name="text-feedback"
                                value={rating}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            <p>{rating}</p>
                        </div>

                        <div>
                            <button className='bg-purple-500 p-3 rounded-2xl text-white font-bold'>Add To Cart <ShoppingCartOutlined/></button>
                            <button className='p-2 border-2 hover:border-black  rounded-full ml-5'><FavoriteBorderOutlined/></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;