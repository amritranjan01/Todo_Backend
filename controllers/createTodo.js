// we have to to access of database
const Todo = require("../models/Todo");

// we reached in the controllers so we have to define the route present in it
exports.createTodo = async (req, res) => {
  try {
    // extract the title and description from the body parser from its body
    const { title, description } = req.body;

    // now we have to insert in the db
    // create a new to do object and insert in the db
    const response = await Todo.create({ title, description });

    // send a json response a json flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Successfully inserted",
    });
  } catch (err) {
    // now we have to settle the error in it
    console.error(err);
    console.log(err);
    // internal server error

    res.status(500).json({
      success: false,
      data: "internal Server error",
      message: err.message,
    });
  }
};
