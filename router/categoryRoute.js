import express from "express";
import * as CategoryController from "../controllers/categoryController.js";

const router = express.Router();

router.route("/").post(CategoryController.createCategory);


export default router;