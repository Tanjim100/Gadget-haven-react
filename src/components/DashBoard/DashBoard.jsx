import React, { useState } from "react";


const DashBoard = () => {

    const cartItems = [
        {
            id: 1,
            name: "Samsung Galaxy S23 Ultra",
            description: "Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.",
            price: 999.99,
        },
        {
            id: 2,
            name: "Samsung Galaxy S23 Ultra",
            description: "Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.",
            price: 199.99,
        },
        {
            id: 3,
            name: "Samsung Galaxy S23 Ultra",
            description: "Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.",
            price: 299.99,
        },
    ];

    const wishlistItems = [
        {
            id: 1,
            name: "Apple MacBook Pro",
            description: "M2 chip, 16GB RAM, 512GB SSD, 14-inch Liquid Retina display.",
            price: 1299.99,
        },
        {
            id: 2,
            name: "Sony WH-1000XM5",
            description: "Industry-leading noise canceling wireless headphones.",
            price: 349.99,
        },
    ];


    const [view, setView] = useState("cart");
    const [sort, setSort] = useState('');
    const [products, setProducts] = useState(cartItems);

    const handleProduct = item => {
        setView(item);
        setProducts(item === "cart" ? cartItems : wishlistItems);
    }

    const bgcart = view === "cart" ? "bg-white text-purple-500" : "";
    const bgwhishlist = view === "wishlist" ? "bg-white text-purple-500" : "";

    const handleSort = sortType => {
        setSort(sortType);

        if (sort === 'priceSort') {
            const sortProduct = [...products].sort((a, b) => a.price - b.price);
            setProducts(sortProduct);

        }
        else {
            const sortProduct = [...products].sort((a, b) => a.id - b.id);
            setProducts(sortProduct);
        }
    }

    return (
        <div className="">
            <div className="text-center bg-purple-600 p-10">
                <div className=" max-w-6xl mx-auto  text-white space-y-6">
                    <h1 className="text-5xl">Dashboard</h1>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div>
                        <div className="toggle-buttons space-x-4 text-black">
                            <button className={`py-2 px-10 border-2 text-white font-semibold border-white rounded-full hover:bg-white hover:text-purple-600 ${bgcart}`} onClick={() => handleProduct("cart")}>Cart</button>
                            <button className={`py-2 px-10 border-2 text-white font-semibold border-white rounded-full hover:bg-white hover:text-purple-600 ${bgwhishlist}`} onClick={() => handleProduct("wishlist")}>Wishlist</button>
                        </div>

                        {/* Pass View State to ListedItem Component */}

                    </div>
                </div>
            </div>


            <div className="max-w-6xl mx-auto">
                {view === "cart" ?
                    <div className="flex justify-between items-center py-4">
                        <h2 className="text-xl font-bold">Cart</h2>
                        <div className="flex items-center space-x-2">
                            <h2 className="text-xl font-bold">Total cost: $</h2>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className=" text-purple-600 border border-purple-600 p-2 rounded-full m-1">Sort by Price</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><a onClick={() => handleSort('priceSort')}>Price</a></li>
                                    <li><a onClick={() => handleSort('ratingSort')}>Rating</a></li>
                                </ul>
                            </div>
                            <div><button className="text-purple-500 border border-purple-500 p-2 rounded-full">Purchase</button></div>
                        </div>
                    </div> : <h2 className="text-xl font-bold py-6 items-center">Wishlist</h2>
                }

                {/* cart or wishlist  */}
                <div>
                    {/* {view === "cart" && cartItems.length > 0 ? ( */}
                    {
                        products.map((item) => (
                            <div key={item.id} className="flex justify-between items-center my-4 p-4  rounded-xl bg-white shadow-xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 bg-gray-300 rounded"></div>
                                    <div>
                                        <h3 className="text-lg font-bold">{item.name}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                        <p className="font-semibold">Price: ${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                {/* <FaTimes className="text-red-500 text-xl cursor-pointer" /> */}
                            </div>
                        ))
                    }
                    {/* ) : view === "wishlist" && wishlistItems.length > 0 ? (
                        wishlistItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center p-4 border-b">
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 bg-gray-300 rounded"></div>
                                    <div>
                                        <h3 className="text-lg font-bold">{item.name}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                        <p className="font-semibold">Price: ${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                {/* <FaTimes className="text-red-500 text-xl cursor-pointer" /> */}
                    {/* </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 mt-4">No items found.</p>
                    )} */}
                </div>
            </div>

        </div>

    );
};

export default DashBoard;









{/* <div>
    <div>
        <h2></h2>
        <div>
            <h2>Total cost: $</h2>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>
    </div>
</div> */}