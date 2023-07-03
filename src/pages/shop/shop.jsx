import React from "react";
import { Product } from "./product";
import "./shop.css";

export const Shop = ({ products }) => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Nima's Shop</h1>
      </div>

      <div className="products">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
