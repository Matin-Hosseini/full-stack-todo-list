const todoModel = require("./../models/todo");

exports.createOne = async (req, res) => {
  const { title } = req.body;

  const todo = await todoModel.create({
    title,
    isCompleted: false,
  });
  res.send(todo);
};
exports.getAll = async (req, res) => {
  const allTodos = await todoModel.find();
  res.send(allTodos);
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  const updateTodo = await todoModel.findByIdAndUpdate({ _id: id }, { title });
  const updatedTodo = await todoModel.findOne({ _id: id });
  res.send({ message: "todo should be updated", updatedTodo });
};
exports.delete = async (req, res) => {
  const id = req.params.id;
  await todoModel.findByIdAndDelete({ _id: id });

  res.send({ message: "todo should be deleted" });
};
