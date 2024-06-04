const { Schema, model } = require("mongoose");

const profileSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Profile = model("Profile", profileSchema);
