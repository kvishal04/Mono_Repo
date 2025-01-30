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
exports.loginById = exports.signup = exports.login = void 0;
const __1 = require("..");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../secrets");
const bad_request_1 = require("../exceptions/bad-request");
const root_1 = require("../exceptions/root");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const successResponce_1 = require("../middlewares/successResponce");
exports.login = (0, asyncHandler_1.tryCatchHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    let user = yield __1.prismaClient.user.findFirst({
        where: {
            email
        }
    });
    if (!user) {
        // find user
        throw new bad_request_1.BadRequestException('User does not exist', root_1.ErrorCode.USER_NOT_FOUND);
    }
    if (!(0, bcryptjs_1.compareSync)(password, user.password)) {
        // compare password
        throw new bad_request_1.BadRequestException('Invalid Password !', root_1.ErrorCode.INNCORRECT_PASSWORD);
    }
    let token = jsonwebtoken_1.default.sign({
        user
    }, secrets_1.JWTSECRET, { expiresIn: '8h' });
    return (0, successResponce_1.successResponce)(req, res, 'User login successfully', successResponce_1.SuccessCode.SUSSESSFUL, { token, user: { id: user.id, name: user.name, email: user.email } });
}));
exports.signup = (0, asyncHandler_1.tryCatchHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = req.body;
    let user = yield __1.prismaClient.user.findUnique({
        where: {
            email
        }
    });
    if (user) {
        // throw Error('User already Exist')
        throw new bad_request_1.BadRequestException('User already Exist', root_1.ErrorCode.USER_ALREADY_EXIST, user);
    }
    user = yield __1.prismaClient.user.create({
        data: {
            name,
            email,
            password: (0, bcryptjs_1.hashSync)(password, 10)
        }
    });
    return (0, successResponce_1.successResponce)(req, res, 'User created successfully', successResponce_1.SuccessCode.CREATED, user);
}));
const loginById = (req, res) => {
    res.send(" loginById Works");
};
exports.loginById = loginById;
