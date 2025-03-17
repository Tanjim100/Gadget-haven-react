import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FooterBanner from "../FooterBanner/FooterBanner";
import HeaderWithBanner from "../HeaderWithBanner/HeaderWithBanner";

const Root = () => {
    const location = useLocation();

    console.log(location.pathname);
    return (
        <div className="bg-gray-100">
            {
                location.pathname === '/' ? 
                <HeaderWithBanner></HeaderWithBanner> : <Header></Header>
            }
            <Outlet></Outlet>
            <FooterBanner></FooterBanner>
            <Footer></Footer>
        </div>
    );
};

export default Root;