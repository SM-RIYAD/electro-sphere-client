import React from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const CartProductCard = ({setProducts, product,cartproducts }) => {
  const { name, _id, brand, date, price, rating, description, type, photo } =
    product;
    const handleDelete =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://brand-website-server.vercel.app/cartproduct/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = cartproducts.filter(cof => cof._id !== _id);
                            setProducts(remaining);
                        }
                    })

            }
        })


    }

  return (
    <div>
      <div className="p-5 ">
        <div className="card  lg:h-80  flex lg:flex-row flex-col  border-stone-100 border-2 card-side bg-base-100 shadow-xl">
          <figure className="lg:w-1/2 lg:h-full h-40 lg:p-0 p-2  ">
            <img className="object-fill rounded h-full" src={photo} alt="Movie" />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title">{name}</h2>
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

           
            {/* <p>
              {" "}
              <i>{price} $</i>
            </p>

            <p>{rating} </p> */}
            
          <p className="text-red-500 font-bold"> {price} $</p>

          <p className=""> {rating}<FontAwesomeIcon className="ps-1" icon={faStar} style={{ fontSize: '16px', color: 'orange' }} /> </p>
            <div className="card-actions justify-start">
              <button onClick={()=>handleDelete(_id)} className="btn  btn-error">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
