// This file is used to connect to the database


// Importing JSON file by es5 module system
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const ProductJson = require("./products.json"); 

// Importing JSON file by es6 module system
import Products from "./products.json"; // threw error

import { connectDB } from "./db/connect.js";
import Product  from "./models/product.js";
import dotenv from "dotenv";
dotenv.config();

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(Products);
    console.log("Data inserted successfully");
    
  } catch (error) {
    console.log(error);
  }
};

start();
