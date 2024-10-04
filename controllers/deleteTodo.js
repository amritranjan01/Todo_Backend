// we have to to access of database
const Todo = require("../models/Todo");

// we reached in the controllers so we have to define the route present in it
exports.deleteTodo = async (req, res) => {
  try {
    // destructing of the id is done here
    const {id}=req.params;
    // const{title,description}=req.body;
    // one more way to do is 
    // await Todo.findByIdAndDelete(id);

    const todo =await Todo.findByIdAndDelete(
        {_id:id},
    );

    res.status(200).json({
        success: true,
        data: todo,
        message: `Data Deleted  for the given id : ${id}`,
      });


    //   // one more way
    //   res.json({
    //     success:true,
    //     message:" data is deleted",
    //   });
  } 
  
  catch (err) {
    // now we have to settle the error in it
    console.error(err);
    console.log(err);
    // internal server error

    res.status(500).json({
      success: false,
      data: "internal Server error and not deleted succesfully",
      message: err.message,
    });
  }
};
