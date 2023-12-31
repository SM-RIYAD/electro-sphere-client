import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1603184017968-953f59cd2e37?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1771)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      {/* <h1 className="mb-5 text-4xl font-bold">Discover ElectroSphere!</h1> */}
      <div className='  h-32 w-full lg:scale-150 '><img className="w-full  h-full" src="https://i.ibb.co/xYnRrrK/electro-for-dark2-removebg-preview.png"  /></div>
      
      <p className="mb-2 relative -top-7">ElectroSphere invites you to explore a curated universe of cutting-edge electronics from leading brands like Apple, Samsung, and Sony. Find the latest smartphones, tablets, laptops, and accessories—all handpicked for quality and innovation. !</p>
     <Link to= "/register">
     <button className="btn btn-primary">SHOP NOW</button>
     </Link> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;