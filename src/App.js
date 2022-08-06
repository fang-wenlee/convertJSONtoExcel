import "./styles.css";
import React, { useState, useEffect } from "react";
import { ExportToExcel } from "./excelfile";

export default function App() {
  const [productData, setProductData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    //product A : https://jsonplaceholder.typicode.com/users
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        //  console.log("Product: ", json);
        setProductData(json);
      });
    // User API : https://jsonplaceholder.typicode.com/users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log("user", json);
        setUserData(json);
      });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ExportToExcel userData={userData} productData={productData} />
    </div>
  );
}
