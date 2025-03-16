import React, { use, useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState([]);

    useEffect(() => {
        fetch('./productsData.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setShowProducts(data);
            });
    }, []);

    const [selectedCategory, setSelectedCategory] = useState("all-products");

    console.log(products);

    const handleClick = title => {
        if (title === "all-products") {
            setShowProducts(products);
        }
        else {
            const filtered = products.filter((product) => product.category === title);
            setShowProducts(filtered);
        }
        setSelectedCategory(title);
    }

    return (
        <div>
            <h1 className='text-center text-5xl p-10'>Explore Cutting Edge Products</h1>
            <div className='flex gap-8'>
                <div className='grid p-4 gap-4 rounded-2xl border bg-gray-300 w-[200px] h-80'>
                    <button  
                        onClick={() => handleClick("all-products")} 
                        className={`p-2 ${
                            selectedCategory === "all-products"
                                ? "bg-purple-600 text-white"
                                : "bg-white text-black hover:bg-purple-400 hover:text-white"
                            } rounded-xl`}>
                                All Products
                    </button>
                    <button  
                        onClick={() => handleClick("laptop")} 
                        className={`p-2 ${
                            selectedCategory === "laptop"
                                ? "bg-purple-600 text-white"
                                : "bg-white text-black hover:bg-purple-400 hover:text-white"
                            } rounded-xl`}>
                                Laptops
                    </button>
                    <button  
                        onClick={() => handleClick("phone")} 
                        className={`p-2 ${
                            selectedCategory === "phone"
                                ? "bg-purple-600 text-white"
                                : "bg-white text-black hover:bg-purple-400 hover:text-white"
                            } rounded-xl`}>
                                Phones
                    </button>
                    <button  
                        onClick={() => handleClick("smart watch")} 
                        className={`p-2 ${
                            selectedCategory === "smart watch"
                                ? "bg-purple-600 text-white"
                                : "bg-white text-black hover:bg-purple-400 hover:text-white"
                            } rounded-xl`}>
                                Smart Watches
                    </button>
                    <button  
                        onClick={() => handleClick("accessories")} 
                        className={`p-2 ${
                            selectedCategory === "accessories"
                                ? "bg-purple-600 text-white"
                                : "bg-white text-black hover:bg-purple-400 hover:text-white"
                            } rounded-xl`}>
                                Accessories
                    </button>
                </div>
                <div>

                    <div className='grid grid-cols-3 gap-4 px-6'>
                        {
                            showProducts.map(product => <Product key={product.product_id} product={product}></Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;