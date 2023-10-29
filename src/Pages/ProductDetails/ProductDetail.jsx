import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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
  
      <div className=" lg:max-w-6xl  pb-20 gap-10 mx-5 lg:mx-auto mt-10 lg:flex   ">
        <div className='lg:w-1/2 lg:p-5  '>
          <img
            className="w-full rounded-xl h-full object-fill"
            src={specificProduct?.photo}
          />
        </div>
        <div className=" lg:w-1/2 mb-10" >
          <p className='mt-2 text-base font-bold text-blue-400'> {specificProduct?.brand?.toUpperCase() + " > " + specificProduct?.type?.toUpperCase()} </p>
          <h1 className="text-2xl  "> {specificProduct?.name}</h1>
          {/* <p className="text-gray my-5 ">{specificProduct?.brand}</p> */}
          <button className="my-4 p-1  rounded-lg  bg-green-600"> <p className="font-bold text-white"> <FontAwesomeIcon className="ps-1" icon={faStar} style={{ fontSize: '16px', color: 'white' }} />{" "+rating} Star </p></button>
      

         {/* <button className="btn  px-1 text-xs btn-outline btn-warning">{specificProduct?.brand}</button>
         <button className="btn  px-1 text-xs btn-outline btn-warning">{specificProduct?.type}</button> */}
         
          
         
          <p className=" font-bold text-4xl pb-2">{specificProduct.price} $</p>

          <div className='w-full border-[1px] border-gray-200'></div>
          <p className="text-gray my-3 ">{specificProduct?.description}</p>
          <div className='w-full border-[1px] border-gray-200'></div>
         
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
