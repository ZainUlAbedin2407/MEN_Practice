import express from "express";
import {
  getAllProducts,
  getAllProductsTesting,
} from "../controllers/products.js";
export const router = express.Router(); // *A named export of router

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

// export default router;               // *A default export of router
