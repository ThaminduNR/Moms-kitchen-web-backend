import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
const routes = express.Router();

// /api/my/user
routes.post("/", jwtCheck, MyUserController.createUser);

routes.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

routes.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser)

export default routes;
