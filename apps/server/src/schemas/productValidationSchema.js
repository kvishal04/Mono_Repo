"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidationRules = void 0;
const express_validator_1 = require("express-validator");
const ProductValidationRules = (args) => {
    switch (args) {
        case 'create':
            return [
                (0, express_validator_1.check)('name', 'please enter product name').notEmpty(),
                (0, express_validator_1.check)('description', 'please enter product description').notEmpty(),
                (0, express_validator_1.check)('price', 'please enter price ').notEmpty().isNumeric().withMessage('price should be in numbers'),
                (0, express_validator_1.check)('tags', 'please enter tags').notEmpty(),
            ];
        case 'update':
            return [
                (0, express_validator_1.check)('id', 'No product Id Provided').notEmpty().isNumeric().withMessage('Id should be in numbers'),
                (0, express_validator_1.check)('name', 'please enter product name').optional().notEmpty(),
                (0, express_validator_1.check)('description', 'please enter product description').optional().notEmpty(),
                (0, express_validator_1.check)('price', 'please enter price ').optional().notEmpty().isNumeric().withMessage('price should be in numbers'),
                (0, express_validator_1.check)('tags', 'please enter tags').optional().notEmpty(),
            ];
        case 'delete':
            return [
                (0, express_validator_1.check)('ids', 'please enter product id').notEmpty().isArray({ min: 1 }).withMessage('Please select one product atleast'),
            ];
        case 'getone':
            return [
                (0, express_validator_1.param)('id', 'please enter product id').notEmpty().isNumeric().withMessage('Please prove valid user id'),
            ];
        default:
            return []; // Ensure this is always an array (even empty) to avoid undefined errors
    }
};
exports.ProductValidationRules = ProductValidationRules;
