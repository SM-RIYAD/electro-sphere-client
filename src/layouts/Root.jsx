import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "../Footer/Footer";

const Root = () => {
    const  { theme } =useContext(AuthContext)

    return (
        <div data-theme={`${theme}`} className="">
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;