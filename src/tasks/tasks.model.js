const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    //   createdBy: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    //   },
  },
  {
    timestamps: true,
  }
);

module.exports.Tasks = model("Tasks", taskSchema);
