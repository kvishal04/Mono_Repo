"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const userValidationSchema_1 = require("../schemas/userValidationSchema");
const validateSchema_1 = require("../schemas/validateSchema");
const authRoutes = (0, express_1.Router)();
authRoutes.route('/')
    .get((0, userValidationSchema_1.userValidationRules)("login"), validateSchema_1.validate, auth_1.login)
    .post((0, userValidationSchema_1.userValidationRules)('registerUser'), validateSchema_1.validate, auth_1.signup);
exports.default = authRoutes;
