import { useEffect, useState } from "react";
import Header from "../../Shared/Header";
import Banner from "./Banner";
import BrandCards from "./BrandCards";


const Home = () => {

const [brands,setBrands]=useState([]);

    useEffect(() => {
     fetch("http://localhost:5000/brands").then((result) => result.json()).then((data) => setBrands(data));
    }, []);
  console.log("brands",brands)
  
    return (
        <div>
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