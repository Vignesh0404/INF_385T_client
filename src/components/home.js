import { React, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import BootstrapCarousel from "./carousel";
import ProductList from "./productList";

function Home() {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  // if (!authenticated) {
  //   return <Navigate replace to="/login" />;
  //   //useNavigate("/dashboard");
  // } else {
  return (
    <div className="container">
      <h1>Home page</h1>
      <BootstrapCarousel />
      <ProductList />
    </div>
  );
}
//}

export default Home;