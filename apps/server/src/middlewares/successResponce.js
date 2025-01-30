"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessCode = exports.successResponce = void 0;
const successResponce = (req, res, message, statusCode, data = null) => {
    return res.status(statusCode).json({
        message: message,
        statusCode,
        data
    });
};
exports.successResponce = successResponce;
var SuccessCode;
(function (SuccessCode) {
    SuccessCode[SuccessCode["CREATED"] = 201] = "CREATED";
    SuccessCode[SuccessCode["UPDATED"] = 203] = "UPDATED";
    SuccessCode[SuccessCode["SUSSESSFUL"] = 200] = "SUSSESSFUL";
    SuccessCode[SuccessCode["DELETED"] = 203] = "DELETED";
})(SuccessCode || (exports.SuccessCode = SuccessCode = {}));
