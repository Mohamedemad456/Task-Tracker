import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

function NavLayout() {
    return (
        <>
        <NavBar/>
        <Outlet/>
        </>
    );
}

export default NavLayout;