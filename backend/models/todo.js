const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("todos", schema);

module.exports = model;
