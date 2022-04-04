import React, { useEffect, useState } from "react";
import useToggle from "../hooks/useToggle";

const HeaderMobi = ({ hanldeToggle }) => {
  return (
    <div className="mt-4 flex flex-row items-center justify-between w-full s:hidden">
      <div className="flex justify-start items-center">
        <div className="logo w-7 h-7 ">
          <img src="https://filmhot.live/icon.png" className="" />
        </div>
        <h3 className="text-xl font-medium ml-2">FilmHot</h3>
      </div>
      <div onClick={hanldeToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
            onClick={hanldeToggle}
          />
        </svg>
      </div>
    </div>
  );
};

export default HeaderMobi;
