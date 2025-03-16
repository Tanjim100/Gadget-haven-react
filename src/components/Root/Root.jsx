import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FooterBanner from "../FooterBanner/FooterBanner";

const Root = () => {
    return (
        <div className="bg-gray-100">
            <Header></Header>
            <Outlet></Outlet>
            <FooterBanner></FooterBanner>
            <Footer></Footer>
        </div>
    );
};

export default Root;