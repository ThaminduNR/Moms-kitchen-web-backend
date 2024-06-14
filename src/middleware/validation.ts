import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handelValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be string"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("AddressLine1 must be string"),

  body("city").isString().notEmpty().withMessage("City must be string"),
  body("country").isString().notEmpty().withMessage("Country must be string"),
  handelValidationErrors,
];

export const validateMyRestaurantRequest = [
  body("restaurantName").notEmpty().withMessage("Restaurant name is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("country").notEmpty().withMessage("Country is required"),
  body("deliveryPrice")
    .isFloat({ min: 0 })
    .withMessage("Delivery price must be a number"),
  body("estimateddeliveryTime")
    .isInt()
    .withMessage("Estimated delivery time is Positive Integar"),
  body("cuisines")
    .isArray()
    .withMessage("Cuisines must be an array")
    .not()
    .isEmpty()
    .withMessage("Cuisines must not be empty"),
  body("menuItem").isArray().withMessage("Menu item must be an array"),
  body("menuItem.*.name").notEmpty().withMessage("Menu item name is required"),
  body("menuItem.*.price")
    .isFloat({ min: 0 })
    .withMessage("Menu item price is required and must be positive number"),

  handelValidationErrors,
];
