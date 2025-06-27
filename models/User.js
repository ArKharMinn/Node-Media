const mongoose = require("mongoose");

const User = mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("User", User);
