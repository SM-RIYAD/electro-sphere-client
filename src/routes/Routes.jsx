import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../errorpage/ErrorPage";
import Home from "../Pages/Home/Home";
import BrandPage from "../Pages/Brand/BrandPage";
import Login from "../Pages/login/Login";
import Register from "../register/Register";
import PrivateRoute from "./privateRoute";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCartPage from "../Pages/MyCartPage/MyCartPage";
import UpdateProductPage from "../Pages/UpdateProduct/UpdateProductPage";
import ProductDetail from "../Pages/ProductDetails/ProductDetail";





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
                path: '/brand/:brandName',

                
                element: <BrandPage/>, 
                
                loader: () => fetch('/sliderpic.json')
            
            }, 
            {
                path: '/login',
                element: <Login/>, 
            
            }, 

            {
                path: '/updateproduct/:id',
                element: <UpdateProductPage/>, 
            
            }, 

            {
                path: '/productdetails/:id',
                element: <ProductDetail/>, 
            
            }, 
            {
                path: '/register',
                element: <Register/>, 
            
            }, 
            {
                path: '/addproduct', 
                element: <PrivateRoute><AddProduct/></PrivateRoute>,
                
            },

            {
                path: '/myCart', 
                element: <PrivateRoute><MyCartPage/></PrivateRoute>,
                
                
            },
          
        ]
    }    
]);

export default router;