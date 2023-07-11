const { Users } = require("../models/users");
const { Agents } = require("../models/agents");

const login = async (req, res) => {};
const register_agents = async (req, res) => {};
const register_user = async (req, res) => {};
const forgot_password = async (req, res) => {};
const reset_password = async (req, res) => {};
const verify_account = async (req, res) => {};

module.exports = {
    login,
    register_agents,
    register_user,
    forgot_password,
    reset_password,
    verify_account
};