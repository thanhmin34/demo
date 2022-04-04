import React from "react";

const Banner = () => {
  return (
    <div className="mt-8 w-full rounded-lg mx-auto">
      <div className="relative w-full h-full pt-[42%] rounded-lg">
        <img
          src="https://www.galaxycine.vn/media/2019/4/30/endgame2_1556594352514.jpg"
          className="absolute top-0 left-0 right-0 w-full h-full object-cover rounded-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
