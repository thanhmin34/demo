import React from "react";
import CartItem from "../../component/CartItem";

const ListMovie = ({ title }) => {
  return (
    <div className="mt-6 ">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <div className="grid grid-cols-2 gap-5 ">
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default ListMovie;
