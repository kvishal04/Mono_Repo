"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdmin = void 0;
const asyncHandler_1 = require("./asyncHandler");
const bad_request_1 = require("../exceptions/bad-request");
const root_1 = require("../exceptions/root");
exports.authAdmin = (0, asyncHandler_1.tryCatchHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        throw new bad_request_1.BadRequestException("User does not exist", root_1.ErrorCode.USER_NOT_FOUND);
    }
    console.log("req.user.role", req.user.role);
    if (req.user.role !== 'ADMIN') {
        throw new bad_request_1.BadRequestException("Invalid User!", root_1.ErrorCode.INVALID_USER);
    }
    next();
}));
