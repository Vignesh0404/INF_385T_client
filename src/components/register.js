import React, { useState } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";

import configData from "../config.json";

export default function Register() {
 const [form, setForm] = useState({
   firstName: "",
   lastName:"",
   email: "",
   password: "",
   address: "",
   gender: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newUser = { ...form };
 
   await fetch(configData.SERVER_URL+"/register", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newUser),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ firstName: "", lastName:"", email: "", password: "", address: "", gender: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div className="container text-center">
     <h3>Register</h3>
     <form onSubmit={onSubmit}>
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
           id="lastName"
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