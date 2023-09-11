import "../styles/globals.css";
import { StateContextProvider } from "../Context/constants";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>
    </>
  );
}
