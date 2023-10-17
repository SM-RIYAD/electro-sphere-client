import { useContext, useEffect, useState } from "react";
import Header from "../../Shared/Header";
import Banner from "./Banner";
import BrandCards from "./BrandCards";
import { AuthContext } from "../../providers/AuthProvider";


const Home = () => {
    const  { theme } =useContext(AuthContext)
const [brands,setBrands]=useState([]);



    useEffect(() => {
     fetch("http://localhost:5000/brands").then((result) => result.json()).then((data) => setBrands(data));
    }, []);
  console.log("brands",brands)
  
    return (
        <div data-theme={`${theme}`} className="">
         <Header></Header>
         <Banner/>
<div className="grid lg:max-w-6xl mx-auto gap-5 mt-10 grid-cols-3">

{
brands.map((brand,idx)=><BrandCards brand={brand} key={idx}/>)



         }
</div>
        

        </div>
    );
};

export default Home;