import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [co, setCo] = useState(0);
  useEffect(() => {}, []);
  return (
    <div>
      <Navbar />
      <div className="container w-11/12 m-auto my-7">
        <Outlet />
      </div>
    </div>
  );
}
