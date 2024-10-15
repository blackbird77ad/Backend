//A user can register, login, logout

//user registration controller
export const registerUser = (req, res, next) => {
  res.json("User registered successfully");
};

//user login controller
export const loginUser = (req, res, next) => {
  res.json("User logged in successfully");
};

//user logout controller
export const logoutUser = (req, res, next) => {
  res.json("User logged out successfully");
};

export const updateProfile = (req, res, next)=>{
  res.json('User profile updated')
}
