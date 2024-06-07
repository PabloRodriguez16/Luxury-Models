import { Router } from "express"
import { getAllUsers, getUserById, registerUser, userLogin } from "../controller/usersController";
import { isRegistered } from "../middlewares/userMiddlewares";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/login", userLogin);
userRouter.get("/:id", getUserById);
userRouter.post("/register", isRegistered,registerUser);

export default userRouter;
