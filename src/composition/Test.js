import React from "react";
import Body from "./Body";
import Header from "./Header";
import { MenuProvide } from "./menu-context";

const Test = () => {
  return (
    <MenuProvide>
      <div className="w-[600px] mx-auto">
        <Header></Header>
        <Body />
      </div>
    </MenuProvide>
  );
};

export default Test;
