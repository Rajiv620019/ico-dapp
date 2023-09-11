import React from "react";
import { useStateContext } from "../Context/index";

const index = () => {
  const { Token_Ico } = useStateContext();
  return <div>{Token_Ico}</div>;
};

export default index;
