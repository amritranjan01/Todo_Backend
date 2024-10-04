// we have to to access of database
const Todo = require("../models/Todo");

// we reached in the controllers so we have to define the route present in it
exports.updateTodo = async (req, res) => {
  try {
    

    // destructing of the id is done here
    const {id}=req.params;
    const{title,description}=req.body;

    const todo =await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updatedAt:Date.now()},
    );

    res.status(200).json({
        success: true,
        data: todo,
        message: `Data Updated for the given id : ${id}`,
      });

   
  } 
  catch (err) {
    // now we have to settle the error in it
    console.error(err);
    console.log(err);
    // internal server error

    res.status(500).json({
      success: false,
      data: "internal Server error not udated successfully",
      message: err.message,
    });
  }
};
