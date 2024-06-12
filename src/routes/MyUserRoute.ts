import express from "express";
import MyUserController from "../controllers/MyUserController";
const routes = express.Router();

// /api/my/user
routes.post("/", MyUserController.createCurrentUser);

export default routes;
