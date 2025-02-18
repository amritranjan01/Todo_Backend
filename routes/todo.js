// require an instance of express
const express=require("express");
// we have to take instance of the router 

const router =express.Router();

// import the controller
const {createTodo}=require("../controllers/createTodo");
const {getTodo,getTodoById}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");

// now we have to map api with this call
// define the api routes and map with the create to do
// defining the api routes and map to the controller 

router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
// map with the contyroller with the routes
router.get("/getTodo/:id",getTodoById);
// we have to do the changes so we have to put the request in this
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports=router;
