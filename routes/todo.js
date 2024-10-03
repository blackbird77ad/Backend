import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodos } from "../controllers/todo.js";

//Create a router
const todoRouter = Router();

//Define routes
todoRouter.post("/todos", addTodo);

todoRouter.get("/todos", getTodos);

todoRouter.patch("/todos/:id", updateTodos);

todoRouter.delete("/todos/:id", deleteTodo);

//export router
export default todoRouter;   