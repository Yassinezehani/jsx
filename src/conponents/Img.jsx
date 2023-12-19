import React from "react";
import { product } from "../prodct";
function Img({ variant }) {
  return (
    <div>
      <div>{variant}</div>
      <img src={product.img} alt="" />
    </div>
  );
}

export default Img;
