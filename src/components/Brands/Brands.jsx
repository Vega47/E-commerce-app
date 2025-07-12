import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
export default function Brands() {
  let [Brands, setBrands] = useState(null);
  function getAllBrands() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/brands`)
      .then((response) => {
        setBrands(response?.data?.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(Brands);

  const [co, setCo] = useState(0);
  useEffect(() => {
    getAllBrands();
  }, []);
  return (
    <>
      <h2 className="text-green-600 font-bold text-center text-3xl my-4">
        All Brands
      </h2>
      <div className="w-full my-20">
        {Brands ? (
          <div className="flex flex-wrap gap-5 w-11/12 mx-auto  justify-center  ">
            {Brands?.map((brand) => {
              return (
                <div className="card  md:w-1/4 w-full  cursor-pointer hover:shadow-2xl transition-all">
                  <img className="w-full h-[300px] " src={brand.image} alt="" />
                  <h2 class="text-center text-2xl bg-gray-100">{brand.name}</h2>
                </div>
              );
            })}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}
