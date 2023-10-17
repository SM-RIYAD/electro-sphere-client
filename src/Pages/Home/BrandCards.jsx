import React from "react";
import { Link } from "react-router-dom";

const BrandCards = ({ brand }) => {
  const { name, img, _id } = brand;
  return (
    <Link to={`/brand/${_id}`}>
      {" "}
      <div className="hover:scale-95 " >
        <div className="card w-96 bg-base-100 shadow-xl image-full border  border-stone-100">
          <figure className="h-56">
            <img
              className=" w-full h-full object-cover"
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions h-40 justify-end items-end">
              <h2 className="card-title font-bold text-2xl">{name}</h2>
            </div>
          </div>
        </div>
      </div>{" "}
    </Link>
  );
};

export default BrandCards;
