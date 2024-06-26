import express from "express";
import { param } from "express-validator";
import Restaurant from "../models/restaurant";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

// /api/restaurent/search/london
router.get(
  "/search/:city",
  param("city").isString().notEmpty().withMessage("City is must be valid string"),
  RestaurantController.searchRestaurant
);

export default router;