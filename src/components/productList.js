import React, { useEffect, useState } from "react";

import configData from "../config.json";

const Product = (props) => (
  <div className="col" key={props.product.title}>
  <div className="card">
    <img src={props.product.image} className="card-img-top" height="200px" width="200px" alt="product image"></img>
    <div className="card-body">
      <h5 className="card-title">{props.product.title}</h5>
      <p className="card-text">{props.product.price}</p>
      <a href="#" className="btn btn-primary">Add to cart</a>
    </div>
  </div>
</div>
);
 
export default function ProductList() {
 const [products, setProducts] = useState([
  ]
 );
 
 //This method fetches the records from the database.
 useEffect(() => {
   async function getProducts() {
     const response = await fetch(configData.SERVER_URL+"/products");
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       //window.alert(message);
       return;
     }
 
     const newProducts = await response.json();
     setProducts(newProducts);
   }
 
   getProducts();
 
   return;
 });
 
 
 // This method will map out the records on the table
 function productList() {
   return products.map((product) => {
     return (
       <Product
         product={product}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Product List</h3>
     <div className="m-5">
    <div className="row row-cols-1 row-cols-md-4 g-4">
          {productList()}
    </div>
   </div>
   </div>
 );
}