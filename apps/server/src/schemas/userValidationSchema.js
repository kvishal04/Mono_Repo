"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationRules = void 0;
const express_validator_1 = require("express-validator");
const userValidationRules = (args) => {
    switch (args) {
        case 'login':
            return [
                (0, express_validator_1.check)('email', 'please enter email').notEmpty(),
                (0, express_validator_1.check)('password', 'please enter password').notEmpty(),
            ];
        case 'registerUser':
            return [
                (0, express_validator_1.check)('name')
                    .notEmpty().withMessage('please enter user name'),
                (0, express_validator_1.check)('email')
                    .notEmpty().withMessage('please enter email')
                    .isEmail().withMessage('please enter a valid email'),
                (0, express_validator_1.check)('password')
                    .notEmpty().withMessage('please enter password')
                    .isLength({ min: 6 }).withMessage('password length should be of minimum 6 characters'),
                (0, express_validator_1.check)('deletedAt')
                    .optional()
                    .isDate().withMessage('It must be a date format'),
            ];
        default:
            return []; // Ensure this is always an array (even empty) to avoid undefined errors
    }
};
exports.userValidationRules = userValidationRules;
