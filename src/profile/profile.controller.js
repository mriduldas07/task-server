const { createToken } = require("../middleware/auth.js");
const { Profile } = require("./profile.modal.js");

module.exports.createProfile = async (req, res) => {
  const { ...profile } = req.body;
  const isExsits = await Profile.findOne({ email: profile.email });
  const token = createToken(profile);
  if (isExsits?._id) {
    return res.status(200).json({ token });
  }
  await Profile.create(profile);
  return res.status(201).json({ token });
};
module.exports.getProfile = async (req, res) => {
  const id = req.params.id;
  const result = await Profile.findById(id);
  res.status(200).json(result);
};
module.exports.updateProfile = async (req, res) => {
  const { email } = req.user.user;
  const { ...updatedData } = req.body;
  const result = await Profile.findOneAndUpdate({ email }, updatedData, {
    new: true,
  });
  res.status(200).json(result);
};
