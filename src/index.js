import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
const provider = new AuthProvider(
  "xar_test_198dd082f54901903bfcd1471e5562a52107b345",
  {
    network: "testnet", // optional, network can be testnet or mainnet - defaults to testnet
    setWindowProvider: true, //optional, defaults to false
    chainConfig: {
      chainId: "80001", //Polygon Mumbai Testnet ChainId
      rpcUrl: "https://rpc.ankr.com/polygon_mumbai",
    },
  } //required
);

await provider.init();
root.render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </React.StrictMode>
);
