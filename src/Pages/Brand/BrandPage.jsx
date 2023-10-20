import { useContext, useEffect, useState } from "react";
import Header from "../../Shared/Header";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";
import { AuthContext } from "../../providers/AuthProvider";
import Brandslider from "./Brandslider";

const BrandPage = () => {
  const [brandProducts, setBrandProducts] = useState([]);
  const all_pics = useLoaderData();
  const [ploading, setploading] = useState(false);
  const { brandName } = useParams();

  const { theme } = useContext(AuthContext);
  useEffect(() => {
    setploading(true);
    fetch(`https://brand-website-server.vercel.app/brandproducts/${brandName}`)
      .then((result) => result.json())
      .then((data) => {
        setBrandProducts(data);
        setploading(false);
      });
  }, []);

  // useEffect(() => {
  //   fetch("/public/brandproduct.json")
  //     .then((result) => result.json())
  //     .then((data) => setBrandProducts(data));
  // }, []);
  const brandpics = all_pics.filter((p) => p.brandName === brandName);
  // console.log(" brand pic ", brandpics );
  console.log("brand pics ", brandpics[0].picUrls);

  // console.log("slider pics from state: ", sliderpics);

  return (
    <div className=" min-h-screen" data-theme={`${theme}`}>
      <Header></Header>
      <Brandslider pictures={brandpics[0]?.picUrls} />

      <h1 className="text-4xl font-bold text-center py-10">BRAND PRODUCTS</h1>
      <div className=" lg:max-w-6xl mx-auto">
        {ploading ? (
          <div>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            {brandProducts.length ? (
              brandProducts.map((product, idx) => (
                <BrandProductCard
                  key={idx}
                  product={product}
                ></BrandProductCard>
              ))
            ) : (
              <div className=" mt-20 col-span-2 row-span-4 flex justify-center w-full ">
                {" "}
                <p className="text-6xl font-bold">
                  Sorry! There are no available products for this brand.{" "}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandPage;
