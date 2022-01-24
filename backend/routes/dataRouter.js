import express from "express";
import {
  deleteProduct,
  getproduct,
  postProduct,
  updateProduct,
  postMenu,
} from "../Controllers/productControllers.js";
import upload from "../helper/fileHelper.js";
const router = express.Router();

router.get("/data", getproduct);
router.post("/postproduct", upload.single("img"), postProduct);
router.post("/postmenu", postMenu);
router.delete("/deleting", deleteProduct);
router.put("/updating", updateProduct);

export default router;
