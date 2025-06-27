const Category = require("../models/Category");

exports.index = async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("index", { categories });
  } catch (error) {
    console.error(error);
  }
};
