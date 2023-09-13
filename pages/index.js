import React from "react";
import { useStateContext, transferNativeToken } from "../Context/index";

const index = () => {
  const { Token_Ico, transferNativeToken } = useStateContext();
  return (
    <div>
      <h1> {Token_Ico} </h1>{" "}
      <button onClick={transferNativeToken}> Buy Token </button>{" "}
    </div>
  );
};

export default index;
