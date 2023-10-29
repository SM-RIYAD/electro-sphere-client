import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "../Footer/Footer";
import "./Root.css"
import Header from "../Shared/Header";
const Root = () => {
    const  { theme } =useContext(AuthContext)

    return (
        <div data-theme={`${theme}`} className="font-class">
            <Header></Header>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;