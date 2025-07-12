import React, { useEffect, useState } from "react";
import RecentProducts from "../RecentProducts/RecentProducts";

export default function Products() {
  const [co, setCo] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <h2 className="text-green-600 font-bold text-center text-3xl my-4">
        Our Products{" "}
      </h2>
      <RecentProducts />
    </>
  );
}
