import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";

function SideBarLayout() {
    return (
        <>
        <SideBar/>
        <Outlet/>  
        </>
    );
};

export default SideBarLayout;