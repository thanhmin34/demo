import React, { useState } from "react";
import Banner from "../../component/Banner";
import Overlay from "../../component/Overlay";
import HeaderMobi from "../../layout/HeaderMobi";
import ListMovie from "./ListMovie";

const Home = () => {
  const [show, setShow] = useState(false);

  const hanldeToggle = () => setShow(!show);
  return (
    <div className="flex flex-col s:flex-row w-full mb-5 h-screen  px-5 s:px-0 ">
      <Overlay show={show} hanldeToggle={hanldeToggle} />
      <div className="flex flex-col flex-grow s:px-2">
        <HeaderMobi hanldeToggle={hanldeToggle} />
        <Banner />
        <ListMovie title={"Popular"} />
        <ListMovie title={"Now Playing"} />
        <ListMovie title={"Top Rated"} />
      </div>
    </div>
  );
};

export default Home;
// s:pl-[75px] s:pr-4
