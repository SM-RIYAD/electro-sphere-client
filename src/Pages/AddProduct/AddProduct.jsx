import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../../Shared/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddProduct = () => {
  const errorToast = (loginError) =>
  toast.error(loginError, { position: "bottom-center" });
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const photo = form.photo.value;
    const date = form.date.value;
    const price = form.price.value;
    const rating = form.rating.value;

    if(rating>5){
console.log("sd");
errorToast("Rating should be less than 5");
return;
    }else{

      const description = form.description.value;
      const type = form.type.value;
      const brand = form.brandName.value;
  
      const newProduct = {
        name,
        brand,
        date,
        price,
        rating,
        description,
        type,
        photo,
      };
  
      console.log(" added product is  ", newProduct);
      ///sending product to server
      fetch("https://brand-website-server.vercel.app/addproduct", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Product Added Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });

    }
  
  };
  return (
    <div className="min-h-screen px-5">
      <Header></Header>
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center py-5">ADD A PRODUCT</h1>
      <div className="lg:max-w-6xl   mx-auto bg-blue-300 rounded-xl shadow-xl">
       
        <form onSubmit={handleAddProduct} className="card-body ">
          <div className="flex lg:flex-row flex-col gap-5">
            <div className="w-full lg:w-1/2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your product name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black" >Type</span>
                </label>
                <input
                  type="type"
                  name="type"
                  placeholder="type"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo Url</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="enter photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="enter the date of add"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  placeholder="Brand Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Short Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          <input type="submit" value="Add Product" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
