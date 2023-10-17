import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../errorpage/ErrorPage";
import Home from "../Pages/Home/Home";
import BrandPage from "../Pages/Brand/BrandPage";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>, 
            
            }, 
            {
                path: '/brand/:id',
                element: <BrandPage/>, 
            
            }, 
          
        ]
    }    
]);

export default router;