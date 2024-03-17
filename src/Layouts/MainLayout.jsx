
import { Outlet } from "react-router-dom";
import NavbarMenu from "../Components/Shared/Navbar/NavbarMenu";


const MainLayout = () => {
    return (
        <div>
            <NavbarMenu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;