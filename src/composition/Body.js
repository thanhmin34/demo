import React from "react";
import { useToggle } from "./menu-context";

const Body = () => {
  const { show, hanldeToggle } = useToggle();
  return (
    <>
      {show && (
        <div className="category flex flex-col mt-2">
          <span>popular</span>
          <span>Now playing</span>
          <span>Top rated</span>
        </div>
      )}
    </>
  );
};

export default Body;
