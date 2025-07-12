import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

export default function Category() {
  let [categories, setCategories] = useState(null);
  function getAllCategories() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((response) => {
        setCategories(response?.data?.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(categories);

  const [co, setCo] = useState(0);
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <>
      <h2 className="text-green-600 font-bold text-center text-3xl my-4">
        Our Categories
      </h2>
      <div className="w-full my-20">
        {categories ? (
          <div className="flex flex-wrap gap-5 w-10/12 mx-auto  justify-center  ">
            {categories?.map((cate) => {
              return (
                <div className="card  md:w-1/5 w-full  cursor-pointer hover:shadow-2xl transition-all">
                  <img className="w-full h-[300px] " src={cate.image} alt="" />
                  <h2 class="text-center text-2xl bg-gray-100">{cate.name}</h2>
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
