import { TodoModel } from "../models/todo.js";
import { addTodoValidator, updateTodoValidator } from "../validators/todo.js";

export const addTodo = async (req, res, next) => {
    try {
        
        //Validate user input
        const { error, value } = addTodoValidator.validate({
            ...req.body,
            icon: req.file?.filename //this indicates the filename assigned to icon key in the schema
        });
        if (error) {
            return res.status(422).json(error);
        }
        //write todo to database 
       const add = await TodoModel.create(value);
        //Respond to request
        res.status(201).json(`You added ${add} to your Todos`);
    } catch (error) {
        next(error);
    }
}

export const getTodos = async (req, res, next) => {
    try {
        const { filter = "{}", limit = 10, skip = 0} = req.query; //the limit goes with the skip and is done on the find
        //Fetch todos from database
        const todos = await TodoModel.find(JSON.parse(filter))
        .limit(limit)//Json.parse a string to json
        .skip(skip);
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

export const deleteTodo = async (req, res, next) => {
    try {
        //delete a book and all books from db
        const deleteAllBooks = await TodoModel.deleteOne(req.body.id)
        res.json("Todo deleted!");
    } catch (error) {
        next(error);
    }
}