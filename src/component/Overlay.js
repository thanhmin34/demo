import React, { useEffect, useRef } from "react";
import useToggle from "../hooks/useToggle";

const Overlay = ({ show, hanldeToggle }) => {
  return (
    <>
      <div
        className={`s:flex-shrink-0 h-screen  fixed s:sticky top-0 left-0  w-[100%] s:w-[50px] s:px-2  bg-mobi transition-all duration-300 translate-x-[-100%] s:translate-x-0 z-10 ${
          show === true ? "active" : ""
        }`}
      >
        <div className="flex flex-col mt-6 mx-6 s:mx-0 s:mx-[5px] s:mt-8 ">
          <div className="flex  items-center justify-between s:hidden ">
            <div className="flex flex-row items-center">
              <div className="logo w-7 h-7 ">
                <img src="https://filmhot.live/icon.png" className="" />
              </div>
              <h3 className="text-xl font-medium ml-2">FilmHot</h3>
            </div>
            <span
              onClick={hanldeToggle}
              className="text-xl px-2 py-2 cursor-pointer"
            >
              X
            </span>
          </div>
          <div className=" hidden logo s:w-6 s:h-6 s:block cursor-pointer s:hidden">
            <img src="https://filmhot.live/icon.png" />
          </div>
          <ListMenu title="MENU" />
        </div>
      </div>
    </>
  );
};

function ListMenu({ title }) {
  return (
    <div className="mt-8 s:mt-2">
      <h3 className="text-[18px] s:hidden ">{title}</h3>
      <ul className="mt-2 s:flex s:flex-col justify-center items-center">
        <div className=" hidden logo s:w-6 s:h-6 s:block cursor-pointer s:mb-2">
          <img src="https://filmhot.live/icon.png" />
        </div>
        <Item
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 s:h-8 w-5 s:h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          }
          title="Home"
        />
        <Item
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 s:h-8 w-5 s:h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
          }
          title="Movies"
        />
        <Item
          title="History"
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 s:h-8 w-5 s:h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
        <Item
          title="Search"
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 s:h-8 w-5 s:h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
        />
        <Item
          title="Log in"
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 s:h-8 w-5 s:h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          }
        />
        {/* <Item
          title="Log out"
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          }
        /> */}
      </ul>
    </div>
  );
}

function Item({ title = "", img }) {
  return (
    <li className="flex flex-row items-center justify-start py-2 pr-4 s:pr-0 cursor-pointer">
      <span className="s:flex-1 s:flex s:justify-center s:items-center">
        {img}
      </span>
      <span className="ml-2 s:hidden">{title}</span>
    </li>
  );
}
export default Overlay;
