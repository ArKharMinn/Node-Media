const mongoose = require("mongoose");

const category = mongoose.Schema(
  {
    name: { type: String, require: true },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Category", category);
