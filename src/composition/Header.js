import React from "react";
import { useToggle } from "./menu-context";

const Header = () => {
  const { show, hanldeToggle } = useToggle();
  return (
    <div className="header cursor-pointer flex" onClick={hanldeToggle}>
      <h2 className="mr-2">Movies</h2>
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default Header;
