import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header";
import CartProductCard from "./CartProductCard";
import { AuthContext } from "../../providers/AuthProvider";

const MyCartPage = () => {
  const [ploading, setploading] = useState(false);
  const { user } = useContext(AuthContext);
  // const cart= useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setploading(true);
    fetch(`https://electro-sphere-server.vercel.app/cart/${user.email}`)
      .then((result) => result.json())
      .then((data) => {setProducts(data)
        setploading(false);
    });
  }, []);
  console.log("This is cart", products);
  return (
    <div>
      
      <h1 className="text-center text-4xl py-10 font-bold">MY CART</h1>
      <div className=" lg:max-w-6xl mx-auto ">

      {ploading ? (
          <div>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
            { products.length ? (
            products.map((product, idx) => (
                <CartProductCard
                  cartproducts={products}
                  setProducts={setProducts}
                  key={idx}
                  product={product}
                />
              ))
            ) : (
              <div className=" mt-10 col-span-2 row-span-4  flex flex-col justify-center items-center w-full ">
                {" "}
                <img className="w-1/3" src="https://i.ibb.co/Y8Jspkt/empty-cart.png" alt=""  />
                <p className="lg:text-2xl font-bold text-gray-500  text-xl px-5 py-10  ">
                  Cart is Empty!{" "}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

     

      {/* {products.length === 0 && (
        <p className="lg:text-4xl py-20 min-h-screen text-yellow-500 font-bold text-center">
          You have not added any product to the cart yet!
        </p>
      )}
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {products.map((product, idx) => (
          <CartProductCard
            cartproducts={products}
            setProducts={setProducts}
            key={idx}
            product={product}
          />
        ))}
      </div> */}
    </div>
  );
};

export default MyCartPage;
