const { login, register_agents, register_user, forgot_password, reset_password, verify_account } = require("../controllers/auth");
const { login_schema, register_schema, reset_password_schema, forgot_password_schema } = require("../schema/users");
const validator = require("../middlewares/validator");
const express = require("express");
const router = express.Router();

router.post("/register", validator(register_schema), register_user);
router.post("/register-agents", validator(register_schema), register_agents);
router.post("/login", validator(login_schema), login);
router.put("/forgot-password", validator(forgot_password_schema), forgot_password);
router.put("/reset-password/:token", [ validator(reset_password_schema) ], reset_password);
router.put("/verify-account/:otken", auth, verify_account)

module.exports = router;