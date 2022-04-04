import React, { useState } from "react";

const useShow = () => {
  const [show, setShow] = useState(false);
  const hanldeToggle = () => {
    setShow((s) => !s);
  };
  return {
    show,
    hanldeToggle,
  };
};

export default useShow;
