import logo from "./logo.svg";
import "./App.css";
import { Auth, useAuth } from "@arcana/auth-react";
import { useEffect, useState } from "react";

function App() {
  const [Login, setLogin] = useState(false);
  const [logout, setLogout] = useState(false);
  const [balance, setBalance] = useState("");
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
          {balance}
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
