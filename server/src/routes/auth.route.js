const { Router } = require("express");
const { check } = require("express-validator");
const { login, register, tokenValidation } = require("../controllers/auth.controller");
const { isValidJWTToken } = require("../middlewares/isValidJWTToken");
const { validateFields } = require("../middlewares/validate-fields");
const authRouter = Router();

// Login route.
authRouter.post("/login", [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateFields,
  ], login
);

// Register a new user.
authRouter.post("/register", [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateFields,
  ], register
);

// Validate JWT token.
authRouter.get("/validate", [isValidJWTToken], tokenValidation);

module.exports = authRouter;
