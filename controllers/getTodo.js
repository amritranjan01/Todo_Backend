// we have to to access of database
const Todo = require("../models/Todo");

// we reached in the controllers so we have to define the route present in it
exports.getTodo = async (req, res) => {
  try {
    // logic is different in this block
    const todos=  await Todo.find({});
    res.status(200).json({
        success: true,
        data: todos,
        message: "Entire data is fetched",
      });


  
  } catch (err) {
    // now we have to settle the error in it
    console.error(err);
    console.log(err);
    // internal server error

    res.status(500).json({
      success: false,
      data: "Server error Present",
      message: err.message,
    });
  }
};



exports.getTodoById = async (req, res) => {
    try {
      // extract the function given by the id 
      // and fx'n used here is find by id 
      const id=req.params.id;
      const todo=  await Todo.findById({_id:id});
      // if no data found with the given id 
      if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data found with thew given id  "
        })
      }



      res.status(200).json({
          success: true,
          data: todo,
          message: `sINGLE Data extracted data is fetched having ${id}`,
        });
  
  
    
    } catch (err) {
      // now we have to settle the error in it
      console.error(err);
      console.log(err);
      // internal server error
  
      res.status(500).json({
        success: false,
        data: "Server error Present No Single data",
        message: err.message,
      });
    }
  };
  