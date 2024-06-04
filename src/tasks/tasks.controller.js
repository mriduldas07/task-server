const { Tasks } = require("./tasks.model.js");

module.exports.createTask = async (req, res) => {
  const { ...taskData } = req.body;
  const result = await Tasks.create(taskData);
  res.status(201).json(result);
};
module.exports.getAllTask = async (req, res) => {
  const result = await Tasks.find();
  res.status(200).json(result);
};
module.exports.getOneTask = async (req, res) => {
  const id = req.params.id;
  const result = await Tasks.findById(id);
  res.status(200).json(result);
};
module.exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { ...updatedData } = req.body;
  const result = await Tasks.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  });
  res.status(200).json(result);
};
module.exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const result = await Tasks.findByIdAndDelete(id);
  res.status(200).json(result);
};
