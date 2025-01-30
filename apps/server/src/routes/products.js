"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productValidationSchema_1 = require("../schemas/productValidationSchema");
const validateSchema_1 = require("../schemas/validateSchema");
const product_1 = require("../controllers/product");
const admin_1 = require("../middlewares/admin");
const productsRoute = (0, express_1.Router)();
productsRoute.route('/')
    .post([admin_1.authAdmin], (0, productValidationSchema_1.ProductValidationRules)('create'), validateSchema_1.validate, product_1.createProduct)
    .put([admin_1.authAdmin], (0, productValidationSchema_1.ProductValidationRules)('update'), validateSchema_1.validate, product_1.updateProduct)
    .get(product_1.getProductList)
    .delete([admin_1.authAdmin], (0, productValidationSchema_1.ProductValidationRules)('delete'), validateSchema_1.validate, product_1.deleteProduct);
productsRoute.route('/:id')
    .get((0, productValidationSchema_1.ProductValidationRules)('getone'), validateSchema_1.validate, product_1.getProduct);
exports.default = productsRoute;
