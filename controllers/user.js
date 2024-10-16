//A user can register, login, logout
import { registerUserValidator, loginUserValidator } from "../validators/user.js";
import { UserModel } from "../models/user.js";
import bcrypt from "bcryptjs"

//user registration controller

export const registerUser = async (req, res, next) => {
  try {
    //validate user input with joi in validate folder
    const { error, value } = registerUserValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    //check if user does not exist
    const user = await UserModel.findOne({ email: value.email });
    if (user) {
      return res.status(409).json('User already exist!')
    }
    //hash their password 
    const hashedPassword = bcrypt.hashSync(value.password, 10);
    //save user to database
    await UserModel.create({
         ...value, //this spread it so you can select a key and pass a new value
         password: hashedPassword
    });
    //send user confirmational email
    //respond to request
    res.json("User registered!");
  } catch (error) {
    next(error);
  }

}


//user login controller
export const loginUser = (req, res, next) => {
  res.json("User logged in successfully");
};

//user logout controller
export const logoutUser = (req, res, next) => {
  res.json("User logged out successfully");
};

export const updateProfile = (req, res, next) => {
  res.json('User profile updated')
}
