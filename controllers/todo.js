import { TodoModel } from "../models/todo.js";

export const addTodo = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        await TodoModel.create(req.body);
        //Respond to request
        res.status(201).json("Todo was added!");
    } catch (error) {
        next(error);
    }
}

export const getTodos = async (req, res, next) => {
    try {
         //Fetch todos from database
          const todos = await TodoModel.find();
          //return response
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
}

export const updateTodos = (req, res, next) => {
    try {
        res.json("Todo updated!");
    } catch (error) {
        next(error);
    }
}

export const deleteTodo = (req, res, next) => {
    try {
        res.json("Todo deleted!");
    } catch (error) {
        next(error);
    }
}