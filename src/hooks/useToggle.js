import React, { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(true);
  const hanldeToggle = () => setToggle((prev) => !prev);
  return { toggle, hanldeToggle };
};

export default useToggle;
