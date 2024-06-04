const { auth } = require("../middleware/auth");
const {
  createProfile,
  updateProfile,
  getProfile,
} = require("./profile.controller");

const router = require("express").Router();

router.patch("/profile", auth, updateProfile);
router.get("/profile/:id", getProfile);
router.post("/create-profile", createProfile);

module.exports.ProfileRouter = router;
