import React from 'react';

const Subscribe = () => {
    return (
        <div  className='bg-opacity-60 ' style={{backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-blue-digital-technology-electronic-banner-image_168524.jpg',opacity:.9}} >
<div className="hero min-h-screen bg-opacity-60 hero-overlay  ">
  <div className="hero-content gap-10 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl px-5 text-white font-bold ">Stay Plugged In</h1>
      <p className="py-6 px-5 text-white">

      Join our vibrant community and Stay Plugged In with ElectroSphere! Be the first to know about the latest tech trends, exclusive deals, and exciting product launches. Subscribe today to unlock a world of innovation, delivered straight to your inbox. Your journey into the future of electronics starts here!</p>
    </div>
    <div className="card   flex-shrink-0 w-full max-w-sm shadow-2xl  ">
      <form className="card-body pb-5 ">
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-xl font-bold text-white">To Subscribe,</span>
          </label>
          <input type="email" placeholder="Enter your email" className="input input-bordered" required />
        </div>
   
        <div className="form-control mt-6">
          <button className="bg-blue-600 btn-primary border-0 text-white btn">Subscribe</button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Subscribe;