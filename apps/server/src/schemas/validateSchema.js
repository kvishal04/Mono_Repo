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
exports.validate = void 0;
const express_validator_1 = require("express-validator"); // Assuming you're using express-validator
const bad_request_1 = require("../exceptions/bad-request");
const root_1 = require("../exceptions/root");
const asyncHandler_1 = require("../middlewares/asyncHandler");
exports.validate = (0, asyncHandler_1.tryCatchHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the validation result
    const errors = (0, express_validator_1.validationResult)(req);
    // If no errors, proceed to the next middleware/controller
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = {};
    // Extract errors in the required format
    errors.array().forEach((err) => {
        if (!extractedErrors[err.path]) {
            // If field doesn't exist in the object, create an array for it
            extractedErrors[err.path] = [];
        }
        // Push the error message to the field's error array
        extractedErrors[err.path].push(err.msg);
    });
    // Return a 400 response with validation error messages
    next(new bad_request_1.BadRequestException("UNPROCESSABLE_ENTITY", root_1.ErrorCode.UNPROCESSABLE_ENTITY, extractedErrors));
}));
