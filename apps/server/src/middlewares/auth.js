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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const root_1 = require("../exceptions/root");
const internal_exception_1 = require("../exceptions/internal-exception");
const asyncHandler_1 = require("./asyncHandler");
const bad_request_1 = require("../exceptions/bad-request");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../secrets");
const __1 = require("..");
exports.authUser = (0, asyncHandler_1.tryCatchHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new bad_request_1.BadRequestException("No Token Found! Authentication Error", root_1.ErrorCode.INVALID_AUTH_TOKEN);
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secrets_1.JWTSECRET); // Explicitly type decoded token
        console.log('decoded', decoded);
        const user = yield __1.prismaClient.user.findUnique({
            where: { email: decoded.user.email },
        });
        console.log("user", user);
        if (!user) {
            throw new bad_request_1.BadRequestException("User does not exist", root_1.ErrorCode.USER_NOT_FOUND);
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log("error", error);
        throw new internal_exception_1.InternalException("Invalid or Expired Token", root_1.ErrorCode.INVALID_AUTH_TOKEN);
    }
}));
