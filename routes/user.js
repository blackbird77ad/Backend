//import router from express
import { Router } from "express";
import { login } from "../controllers/user.js";
import { register } from "../controllers/user.js";
import { logout } from "../controllers/user.js";

// create a router
const userRouter = Router();

//Define the 3 routes: register, login and logout
userRouter.post('/users/register', register);
userRouter.post('/users/login', login);
userRouter.post('/users/logout', logout);

//export the router userRouter
export default userRouter;
