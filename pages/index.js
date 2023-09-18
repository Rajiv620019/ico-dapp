import React from "react";
import { useStateContext, transferNativeToken } from "../Context/index";
import {
  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  TimeLine,
  TokenSale,
} from "../Components/index";

const index = () => {
  const {
    transferNativeToken,
    buyToken,
    connectWallet,
    setAddress,
    Token_Ico,
    currentHolder,
    tokenSale,
    tokenHolders,
    nativeToken,
    balance,
    address,
  } = useStateContext();
  return (
    <div className="v_dark">
      <Header
        address={address}
        setAddress={setAddress}
        connectWallet={connectWallet}
      />
      <Banner transferNativeToken={transferNativeToken} />
      <Service />
      <About />
      <TokenSale buyToken={buyToken} tokenSale={tokenSale} />
      {/* <TimeLine /> */}
      <Distribution />
      <MobileApp />
      {/* <Team /> */}
      {/* <Client />
      <Blog /> */}
      {/* <Faq /> */}
      <Contact />
      <Footer />
      {/* <ArrowUp /> */}
    </div>
  );
};

export default index;
