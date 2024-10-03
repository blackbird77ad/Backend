//external packages import
import express from "express";
import mongoose from "mongoose"; //db connection 1
import cors from 'cors'
//internal import
import todoRouter from "./routes/todo.js";
import userRouter from "./routes/user.js";

//connect to database step 2
await mongoose.connect(process.env.MONGO_URI);

//create an express app
const app = express();

//add cors
app.use(cors());
//use middlewares
app.use(express.json());

//Use routes
app.use(todoRouter, userRouter);

//lsiten for incoming requests
const PORT = 3039
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

// app.listen(3000, () => {
//   console.log("App is listening on port 3000");
// });
