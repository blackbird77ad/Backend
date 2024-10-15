import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodos } from "../controllers/todo.js";
import { localUpload, remoteUpload } from "../middlewares/upload.js";

//Create a router
const todoRouter = Router();

//Define routes
todoRouter.post("/todos", remoteUpload.single('icon'), addTodo);

todoRouter.get("/todos", getTodos);

todoRouter.patch("/todos/:id", updateTodos);

todoRouter.delete("/todos/:id", deleteTodo);

//export router
export default todoRouter;   