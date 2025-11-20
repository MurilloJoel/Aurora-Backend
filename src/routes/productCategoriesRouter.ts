import express from "express";
import {
  getCategories,
  getCategoryPaginated
} from "../controllers/productsCategoriesController.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/paginated", getCategoryPaginated);


export default router;
