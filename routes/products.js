import express from "express";
export const router = express.Router();  // *A named export of router 

import { getAllProducts , getAllProductsTesting } from "../controllers/products.js";

router.route("/").get(getAllProducts); 
router.route("/testing").get(getAllProductsTesting);

// export default router;               // *A default export of router
