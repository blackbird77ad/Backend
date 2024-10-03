//A user can register, login, logout

//user registration controller
export const register = (req, res, next) => {
  res.json("User registered successfully");
};

//user login controller
export const login = (req, res, next) => {
  res.json("User logged in successfully");
};

//user logout controller
export const logout = (req, res, next) => {
  res.json("User logged out successfully");
};
