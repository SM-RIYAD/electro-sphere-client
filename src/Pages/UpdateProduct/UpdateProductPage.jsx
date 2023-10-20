import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Shared/Header";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateProductPage = () => {
  const [specificProduct, setSpecificProduct] = useState();
  const errorToast = (loginError) =>
  toast.error(loginError, { position: "bottom-center" });
  const { id } = useParams();
  console.log("id: ", id);
  useEffect(() => {
    fetch(`https://brand-website-server.vercel.app/specificProduct/${id}`)
      .then((result) => result.json())
      .then((data) => {
        setSpecificProduct(data);
      });
  }, []);
  console.log("specific product : ", specificProduct?.name);
  console.log("specific product date : ", specificProduct);

 const handleUpdateProduct=(e)=>{

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
        
            const updatedProduct = {
              name,
              brand,
              date,
              price,
              rating,
              description,
              type,
              photo,
            };
        
            console.log(" updated product is  ", updatedProduct);
            fetch(
                `https://brand-website-server.vercel.app/updateproduct/${id}`,
                {
                  method: "PUT",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(updatedProduct),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.modifiedCount > 0) {
                    Swal.fire({
                      title: "Success!",
                      text: "Product Updated Successfully",
                      icon: "success",
                      confirmButtonText: "Cool",
                    });
                  }
                });

          }
   

 }
 


  
  return (
  
  <div>

   <Header></Header>
   <ToastContainer />
   <div className="lg:max-w-6xl mx-auto bg-slate-300 rounded-xl shadow-xl">
        <form onSubmit={handleUpdateProduct} className="card-body">
          <div className="flex lg:flex-row flex-col gap-5">
            <div className="w-full lg:w-1/2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={specificProduct?.name}
                  placeholder="Enter your product name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="type"
                  name="type"
                  placeholder="type"
                  defaultValue={specificProduct?.type}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  defaultValue={specificProduct?.photo}
                  placeholder="enter photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="enter the date of add"
                  className="input input-bordered"
                  defaultValue={specificProduct?.date}
                  required
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  placeholder="Brand Name"
                  defaultValue={specificProduct?.brand}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  defaultValue={specificProduct?.description}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered"
                  defaultValue={specificProduct?.price}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  defaultValue={specificProduct?.rating}
                  required
                />
              </div>
            </div>
          </div>
          <input type="submit" value="Update Product" className="btn btn-block" />
        </form>
      </div>



   </div>);
};

export default UpdateProductPage;
