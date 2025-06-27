const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");
const AuthController = require("../controllers/AuthController");
const Middleware = require("../Middleware");
const LoginMiddleware = require("../LoginMiddleware");

router.get("/", Middleware, CategoryController.index);

router.get("/login", LoginMiddleware, AuthController.login);
router.post("/handleLogin", LoginMiddleware, AuthController.handleLogin);
router.post("/logout", AuthController.logout);

module.exports = router;
