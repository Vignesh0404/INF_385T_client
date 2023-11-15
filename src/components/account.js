import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import configData from "../config.json";

export default function Account() {
 const [form, setForm] = useState({
   firstName: "",
   lastName:"",
   email: "",
   password: "",
   address: "",
   gender: "",
 });

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

 useEffect(() => {
    async function getAccountInfo() {
       const email = "dajuzzy@yahoo.com";
      const response = await fetch(configData.SERVER_URL+"/account/"+ email);
  
      if (!response.ok) {
        const message = 'An error occurred: ${response.statusText}';
        window.alert(message);
        return;
      }
  
      const accountInfo = await response.json();
      if (!accountInfo) {
        window.alert('User not found');
        //useNavigate("/");
        return;
      }
      setForm(accountInfo);
    }
  
    getAccountInfo();
    return;
  });
  

 return (
    <div className="container text-center">
      <h3>Account Page</h3>
      <form>
       <div className="form-group">
         <label htmlFor="firstName">First Name</label>
         <input
           type="text"
           className="form-control"
           id="firstName"
           value={form.firstName}
           onChange={(e) => updateForm({ firstName: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="lastName">Last Name</label>
         <input
           type="text"
           className="form-control"
           id="firstName"
           value={form.lastName}
           onChange={(e) => updateForm({ lastName: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="email">Email</label>
         <input
           type="text"
           className="form-control"
           id="email"
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input
           type="password"
           className="form-control"
           id="password"
           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="confirmPassword"> Confirm Password</label>
         <input
           type="password"
           className="form-control"
           id="confirmPassword"
           value={form.confirmPassword}
           onChange={(e) => updateForm({ confirmPassword: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="address">Address</label>
         <input
           type="text"
           className="form-control"
           id="address"
           value={form.address}
           onChange={(e) => updateForm({ address: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="male"
             id="male"
             value="Male"
             checked={form.gender === "Male"}
             onChange={(e) => updateForm({ gender: e.target.value })}
           />
           <label htmlFor="male" className="form-check-label">Male</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="female"
             id="female"
             value="Female"
             checked={form.gender === "Female"}
             onChange={(e) => updateForm({ gender: e.target.value })}
           />
           <label htmlFor="female" className="form-check-label">Female</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="nonBinary"
             id="nonBinary"
             value="NonBinary"
             checked={form.gender === "Non Binary"}
             onChange={(e) => updateForm({ gender: e.target.value })}
           />
           <label htmlFor="nonBinary" className="form-check-label">Non Binary</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Register"
           className="btn btn-primary"
         />
       </div>
     </form>
      </div>
      
      );
}