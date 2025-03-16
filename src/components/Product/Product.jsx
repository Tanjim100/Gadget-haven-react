import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { product_id, product_title, product_image, price } = product;
    return (
        <div>
            <div className="card bg-base-100 w-80 shadow-xl border">
                <figure>
                    <img
                        className="h-40 border"
                        src={product_image}
                        alt={product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p className="text-gray-500">Price: {price} $</p>
                    <Link to={`products/${product_id}`}>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary rounded-3xl">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;