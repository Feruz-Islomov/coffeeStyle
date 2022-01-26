import express from "express";
import {
  deleteProduct,
  getproduct,
  postProduct,
  editProduct,
  getPizza,
  getBurger,
  getSauce,
  getDessert,
  getDrink,
  editMenu,
  getMenu,
} from "../Controllers/productControllers.js";
import upload from "../helper/fileHelper.js";
const router = express.Router();

router.get("/data", getproduct);
router.get("/menus", getMenu);
router.get("/pizza", getPizza);
router.get("/burger", getBurger);
router.get("/sauce", getSauce);
router.get("/dessert", getDessert);
router.get("/drink", getDrink);

router.post("/postproduct", upload.single("img"), postProduct);

router.put("/updatemenu", upload.single("img"), editMenu);
router.put("/updateproduct", upload.single("img"), editProduct);

router.delete("/deleteproduct", deleteProduct);

export default router;
