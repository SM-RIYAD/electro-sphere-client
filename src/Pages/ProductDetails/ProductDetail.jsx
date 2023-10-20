
import Header from "../../Shared/Header";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const ProductDetail = () => {
  const [specificProduct, setSpecificProduct] = useState({});
  const { user, logOut, theme, setTheme } = useContext(AuthContext);
  const { id } = useParams();
  // console.log("this is cart user ", user?.email);

  const email=user?.email;
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
    fetch("https://brand-website-server.vercel.app/addtocart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name,email, brand, date, price, rating, description, type, photo }),
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
          <p className="">
            {" "}
            <i>
              {" "}
              Rated <span className=" font-bold text-gray-600">
                {rating}{" "}
              </span>{" "}
              out of 5{" "}
            </i>{" "}
          </p>
            <p className="font-bold my-3 "> MFG: < span className="font-bold text-red-600">{specificProduct.date}</span></p>
          <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="btn btn-accent  text-white   "
          >
            Add to Cart
          </button>
          <Link to={"/myCart"}>
          <button className="btn btn-active btn-ghost">Cart</button>
          </Link>
       
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
