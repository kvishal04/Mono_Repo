"use strict";
// message, statusCode, error codes
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.HttpException = void 0;
class HttpException extends Error {
    constructor(message, errorCode, statusCode, errors) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.errors = errors;
    }
}
exports.HttpException = HttpException;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["USER_NOT_FOUND"] = 1001] = "USER_NOT_FOUND";
    ErrorCode[ErrorCode["USER_ALREADY_EXIST"] = 1002] = "USER_ALREADY_EXIST";
    ErrorCode[ErrorCode["INNCORRECT_PASSWORD"] = 1003] = "INNCORRECT_PASSWORD";
    ErrorCode[ErrorCode["FUNCTION_WENT_WRONG"] = 1004] = "FUNCTION_WENT_WRONG";
    ErrorCode[ErrorCode["UNPROCESSABLE_ENTITY"] = 20001] = "UNPROCESSABLE_ENTITY";
    ErrorCode[ErrorCode["INTERNAL_EXPECTION"] = 30001] = "INTERNAL_EXPECTION";
    ErrorCode[ErrorCode["INVALID_AUTH_TOKEN"] = 40001] = "INVALID_AUTH_TOKEN";
    ErrorCode[ErrorCode["INVALID_USER"] = 50001] = "INVALID_USER";
    ErrorCode[ErrorCode["PRODUCT_NOT_FOUND"] = 2001] = "PRODUCT_NOT_FOUND";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
