import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import bannerImage from "../../assets/banner.jpg"

const HeaderWithBanner = () => {

    const navigate = useNavigate();

    const handleShop = () => {
        navigate('/home');
    };

    const activeLink = ({ isActive }) => isActive ? "font-bold" : ""

    const title = 'Gadget Haven';
    const links = <>
        <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">DashBoard</NavLink></li>
    </>
    return (
        <div className="h-[1000px]">
            <div className=" relative flex flex-col items-center">
                <div className="bg-purple-600 text-white pb-52 m-8 rounded-2xl absolute z-10">
                    <div className="navbar bg-base-100 max-w-6xl mx-auto bg-purple-600">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    {<svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>}
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    {links}
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-xl">{title}</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {links}
                            </ul>
                        </div>
                        <div className="navbar-end space-x-2">
                            <a className="border p-3 rounded-full hover:bg-white hover:text-purple-600"><BsCart3 /></a>
                            <a className="border p-3 rounded-full hover:bg-white hover:text-purple-600"><FaRegHeart /></a>
                        </div>
                    </div>
                    <div className="text-center bg-purple-600 p-10">
                        <div className=" max-w-6xl mx-auto flex flex-col items-center text-white space-y-6">
                            <h1 className="text-5xl px-40 font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className=' w-[700px]'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                            <Link 
                                className={`py-2 px-10 border-2 text-white font-semibold border-white rounded-full hover:bg-white hover:text-purple-600`} 
                                >Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute z-20 top-[400px] p-8 border-4 rounded-3xl border-white bg-opacity-10 bg-purple-300">
                    <div className="">
                        <img className="w-[750px] rounded-3xl" src={bannerImage} alt="bannerImage" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderWithBanner;