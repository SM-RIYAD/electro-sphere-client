import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Root = () => {
    const  { theme } =useContext(AuthContext)

    return (
        <div data-theme={`${theme}`} className="">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;