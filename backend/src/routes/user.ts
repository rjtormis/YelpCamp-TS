import { createUser, deleteUser, updateUser } from "controllers/user";
import { Router } from "express";
import { findUserById } from "middlewares/user";

const userRoute = Router();
userRoute.route("/").post(createUser);
userRoute.route("/:id").patch(findUserById, updateUser).delete(findUserById, deleteUser);

export default userRoute;
