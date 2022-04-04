import React from "react";

const CartItem = () => {
  return (
    <div className="flex flex-col bg-[#27282e] rounded-lg">
      <div className="relative pt-[145%] ">
        <img
          src="https://i.imgur.com/zcYMCFn.jpg"
          className="absolute top-0 left-0 right-0 w-full h-full object-cover border-top "
        />
      </div>
      <p className="my-1 px-1 text-center text-overflow-1">
        Nhà có năm nàng tiên
      </p>
    </div>
  );
};

export default CartItem;
