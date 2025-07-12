import React, { useEffect, useState } from "react";

import { FallingLines } from "react-loader-spinner";
export default function Spinner() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
    </>
  );
}
