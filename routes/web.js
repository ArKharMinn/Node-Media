const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");
const AuthController = require("../controllers/AuthController");
const Middleware = require("../Middleware");

router.get("/", Middleware, CategoryController.index);

router.get("/login", AuthController.login);
router.post("/handleLogin", AuthController.handleLogin);

module.exports = router;
