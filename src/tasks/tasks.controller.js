const { Profile } = require("../profile/profile.modal.js");
const { Tasks } = require("./tasks.model.js");

module.exports.createTask = async (req, res) => {
  const { email } = req.user.user;
  const { _id } = await Profile.findOne({ email });
  const { ...taskData } = req.body;
  const data = {
    ...taskData,
    createdBy: _id,
  };
  const result = await Tasks.create(data);
  res.status(201).json(result);
};
module.exports.getAllTask = async (req, res) => {
  const result = await Tasks.find();
  res.status(200).json(result);
};
module.exports.getAllTaskForUser = async (req, res) => {
  const { email } = req.user.user;
  const { _id } = await Profile.findOne({ email });
  const result = await Tasks.find({ createdBy: _id });
  res.status(200).json(result);
};
module.exports.getAllTaskForUserCount = async (req, res) => {
  const { email } = req.user.user;
  const { _id } = await Profile.findOne({ email });
  const pending = await Tasks.find({
    createdBy: _id,
    status: "Pending",
  }).countDocuments();
  const progress = await Tasks.find({
    createdBy: _id,
    status: "In Progress",
  }).countDocuments();
  const completed = await Tasks.find({
    createdBy: _id,
    status: "Completed",
  }).countDocuments();

  res.status(200).json([pending, progress, completed]);
};

module.exports.getTaskUserPriorityCount = async (req, res) => {
  const { email } = req.user.user;
  const { _id } = await Profile.findOne({ email });
  const low = await Tasks.find({
    createdBy: _id,
    priority: "Low",
  }).countDocuments();
  const medium = await Tasks.find({
    createdBy: _id,
    priority: "Medium",
  }).countDocuments();
  const high = await Tasks.find({
    createdBy: _id,
    priority: "High",
  }).countDocuments();

  res.status(200).json([low, medium, high]);
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
