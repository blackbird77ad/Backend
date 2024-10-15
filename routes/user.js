//import router from express
import { Router } from "express";
import { loginUser, updateProfile, registerUser, logoutUser } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";


// create a router
const userRouter = Router();

//Define the 3 routes: register, login and logout
userRouter.post('/users/register', registerUser);
userRouter.post('/users/login', loginUser);
userRouter.post('/users/logout', logoutUser);

userRouter.post('/users/me', userAvatarUpload.single('avatar'), updateProfile);

//export the router userRouter
export default userRouter;
