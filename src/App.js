
import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/navbar";
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";
import Account from "./components/account";
 const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="/account" element={<Account/>} />
     </Routes>
   </div>
 );
};
 export default App;
