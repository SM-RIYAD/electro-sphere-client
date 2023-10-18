import React from "react";

const BrandProductCard = ({ product }) => {
    const {name,brand, date, price, rating, description,type,photo
    }=product;
  return (
    <div  className="p-5 ">
      <div className="card  flex lg:flex-row flex-col h-full border-stone-100 border-2 card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img className="object-fill h-full"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title">{name}</h2>
          <p className="text-xl">{brand}</p>
          <p>{type}</p>
          
          
          <p>{description}</p>
          <p>{price} $</p>

          <p>{rating} </p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Details</button>
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProductCard;
