
import { Outlet } from "react-router-dom";
import NavbarMenu from "../Components/Shared/Navbar/NavbarMenu";
import Footer from "../Components/Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavbarMenu/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;