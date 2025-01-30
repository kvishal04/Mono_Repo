"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const products_1 = __importDefault(require("./products"));
const auth_2 = require("../middlewares/auth");
const rootRouter = (0, express_1.Router)();
rootRouter.use('/auth', auth_1.default);
rootRouter.use('/products', [auth_2.authUser], products_1.default);
exports.default = rootRouter;
