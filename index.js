import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";

const app = express();
dotenv.config();

// import product_routes from './routes/products.js';  // *A default import of router
import { router } from "./routes/products.js";         // *A named import of router

app.get("/", (req, res) => {
  res.send("Home Page of backend");
});

app.use("/api/products", router);  // /api/products is the base url for the products routes and we are using the router from the products.js file

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
