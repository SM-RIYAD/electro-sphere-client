import React from "react";
import Header from "../../Shared/Header";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
const ProductDetail = () => {
  const [specificProduct, setSpecificProduct] = useState({});

  const { id } = useParams();
  console.log("id: ", id);
  useEffect(() => {
    fetch(`https://brand-website-server.vercel.app/specificProduct/${id}`)
      .then((result) => result.json())
      .then((data) => {
        setSpecificProduct(data);
      });
  }, []);
  // console.log("specific product : ", specificProduct?.name);
  console.log("specific product from details : ", specificProduct);

  const { name, brand, date, price, rating, description, type, photo } =
    specificProduct;

  const handleAddToCart = () => {
    fetch("http://localhost:5000/addtocart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, brand, date, price, rating, description, type, photo }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Product Added to Cart Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
  };
  return (
    <div>
      <Header></Header>
      <div className=" lg:max-w-6xl mx-5 lg:mx-auto mt-10   ">
        <div>
          <img
            className="w-full h-[500px] object-fill"
            src={specificProduct?.photo}
          />
        </div>
        <div className="mb-10" data-aos-duration="3000">
          <h1 className="text-4xl font-bold mt-5"> {specificProduct?.name}</h1>
          {/* <p className="text-gray my-5 ">{specificProduct?.brand}</p> */}
         
         <div className="flex gap-2 my-3 ">

         <button className="btn  px-1 text-xs btn-outline btn-warning">{specificProduct?.brand}</button>
         <button className="btn  px-1 text-xs btn-outline btn-warning">{specificProduct?.type}</button>
         </div>
          
         
          <p className=" font-bold py-2">{specificProduct.price} $</p>
          <p className="text-gray my-3 ">{specificProduct?.description}</p>

          <button
            onClick={handleAddToCart}
            className="btn  text-white btn-primary  "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
