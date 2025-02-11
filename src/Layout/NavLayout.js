import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

function NavLayout() {
    return (
        <>
        <NavBar/>
        <div className="d-flex">
        <Outlet/>
        </div>
        </>
    );
}

export default NavLayout;