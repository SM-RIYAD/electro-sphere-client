import { useContext, useEffect, useState } from "react";
import Header from "../../Shared/Header";
import Banner from "./Banner";
import BrandCards from "./BrandCards";
import { AuthContext } from "../../providers/AuthProvider";
import FaqPage from "./FaqPage";
import Subscribe from "./Subscribe";

const Home = () => {
  const { theme } = useContext(AuthContext);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://brand-website-server.vercel.app/brands")
      .then((result) => result.json())
      .then((data) => setBrands(data));
  }, []);
  //   console.log("brands",brands)

  return (
    <div data-theme={`${theme}`} className="">
      <Header></Header>
      <Banner />
      <h1 className="text-4xl mt-16 pb-5 font-bold text-center">BRANDS</h1>
      <div className="grid   lg:max-w-6xl mx-auto gap-3 mt-5 lg:grid-cols-3  md:grid-cols-1 md:px-48  lg:px-0 grid-cols-1 lg:ps-0  justify-items-center ">
        {brands.map((brand, idx) => (
         
          <BrandCards brand={brand} key={idx} />
        ))}
      </div>
      <FaqPage></FaqPage>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
