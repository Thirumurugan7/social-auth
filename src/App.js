import logo from "./logo.svg";
import "./App.css";
import { Auth, useAuth } from "@arcana/auth-react";
import { useEffect, useState } from "react";

function App() {
  const [Login, setLogin] = useState(false);
  const [logout, setLogout] = useState(false);
  const [balance, setBalance] = useState("");
  const [account, setAccount] = useState("");
  const auth = useAuth();
  // useEffect(() => {
  //   if (Login) {
  //     const balance = auth.provider.request({
  //       method: "eth_getBalance",
  //     });

  //     const res = auth.availableLogins
  //   }
  //   setBalance(balance);
  // }, [Login]);
  const onLogin = () => {
    console.log("login succs");
    alert("login sucks");
  };

  useEffect(() => {
    const getAccounts = async () => {
      console.log("Requesting accounts");
      try {
        const accounts = await auth.provider.request({
          method: "eth_accounts",
        });
        console.log({ accounts });
        console.log(accounts[0]);
        setAccount(accounts[0]);
      } catch (e) {
        console.log(e);
      }
    };

    getAccounts();
  }, [Login]);

  useEffect(() => {
    const getBalance = async () => {
      console.log("Requesting balance");
      try {
        const accounts = await auth.provider.request({
          method: "eth_getBalance",

          params: [account, "latest"],
        });

        console.log(accounts);
        setBalance(accounts);
      } catch (e) {
        console.log(e);
      }
    };

    getBalance();
  }, [Login]);

  const HandleClick = async () => {
    console.log("login start");
    const res = await auth.loginWithSocial("google");
    console.log(res);
    setLogin(true);
  };
  const handleLogout = async () => {
    console.log("login end");
    const res = await auth.logout();
    console.log(res);
  };
  return (
    <div>
      {auth.loading ? (
        "Loading"
      ) : auth.isLoggedIn ? (
        <>
          <p>Logged In</p>
          Balance: {balance}
          <h1>Account: {account}</h1>
          <button onClick={handleLogout}>log out</button>
        </>
      ) : (
        <div>
          <button onClick={HandleClick}>Login with google</button>
        </div>
      )}
    </div>
  );
}

export default App;
