import React from "react";
import { Link } from "react-router-dom";

const BrandProductCard = ({ product }) => {
  const { name, _id, brand, date, price, rating, description, type, photo } =
    product;
  return (
    <div className="p-5 ">
      <div className="card  flex lg:flex-row flex-col h-full border-stone-100 border-2 card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img className="object-fill h-full" src={photo} alt="Movie" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl">{name}</h2>
          {/* <p className="text-xl"> {brand}</p>
          <p>{type}</p> */}
          <div className="flex gap-2 my-3 ">
            <button className="btn   px-1 text-xs btn-outline btn-warning">
              {brand}
            </button>
            <button className="btn  px-1 text-xs btn-outline btn-warning">
              {type}
            </button>
          </div>

          <p>{description}</p>
          <p className="text-red-500 font-bold"> {price} $</p>

          <p>
            {" "}
            <i>
              {" "}
              Rated <span className=" font-bold text-gray-600">
                {rating}{" "}
              </span>{" "}
              out of 5{" "}
            </i>{" "}
          </p>
          <div className="card-actions justify-center">
            <Link to={`/productdetails/${_id}`}>
              <button className="btn btn-active btn-accent">Details</button>
            </Link>

            <Link to={`/updateproduct/${_id}`}>
              <button className="btn btn-warning">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProductCard;
