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
exports.getProduct = exports.getProductList = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const asyncHandler_1 = require("../middlewares/asyncHandler");
const __1 = require("..");
const bad_request_1 = require("../exceptions/bad-request");
const root_1 = require("../exceptions/root");
const successResponce_1 = require("../middlewares/successResponce");
exports.createProduct = (0, asyncHandler_1.tryCatchHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield __1.prismaClient.product.create({
        data: Object.assign(Object.assign({}, req.body), { tags: req.body.tags.join(",") })
    });
    return (0, successResponce_1.successResponce)(req, res, 'Product created successfully', successResponce_1.SuccessCode.CREATED, product);
}));
exports.updateProduct = (0, asyncHandler_1.tryCatchHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield __1.prismaClient.product.findFirst({
        where: { id: req.body.id },
    });
    if (!product)
        throw new bad_request_1.BadRequestException('Product not Found', root_1.ErrorCode.PRODUCT_NOT_FOUND);
    const updatedProduct = yield __1.prismaClient.product.update({
        where: { id: product.id },
        data: Object.assign(Object.assign({}, req.body), { tags: req.body.tags ? req.body.tags.join(",") : product.tags, updatedAt: new Date() }),
    });
    return (0, successResponce_1.successResponce)(req, res, 'Product updated successfully', successResponce_1.SuccessCode.UPDATED, updatedProduct);
}));
exports.deleteProduct = (0, asyncHandler_1.tryCatchHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.hardDelete) {
        yield __1.prismaClient.product.deleteMany({
            where: { id: {
                    in: req.body.ids
                } },
        });
    }
    else {
        yield __1.prismaClient.product.updateMany({
            where: { id: {
                    in: req.body.ids
                } },
            data: {
                deletedAt: new Date(Date.now())
            }
        });
    }
    return (0, successResponce_1.successResponce)(req, res, 'Product Deleted successfully', successResponce_1.SuccessCode.DELETED);
}));
exports.getProductList = (0, asyncHandler_1.tryCatchHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const currentPage = req.query.skip ? +req.query.skip : 1;
    const limit = req.query.limit ? +req.query.limit : 5;
    const count = yield __1.prismaClient.product.count({
        where: { deletedAt: null }
    });
    const product = yield __1.prismaClient.product.findMany({
        skip: currentPage ? ((currentPage - 1) * 5) : 0,
        take: limit,
        where: { deletedAt: null }
    });
    if (!product)
        throw new bad_request_1.BadRequestException('Product not Found', root_1.ErrorCode.PRODUCT_NOT_FOUND);
    return (0, successResponce_1.successResponce)(req, res, 'Products Fetched successfully', successResponce_1.SuccessCode.SUSSESSFUL, {
        totalPages: limit > 0 ? Math.ceil(count / limit) : 1,
        currentPage,
        firstPage: 1,
        limit,
        product
    });
}));
exports.getProduct = (0, asyncHandler_1.tryCatchHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield __1.prismaClient.product.findFirst({
        where: { id: +req.params.id },
    });
    if (!product)
        throw new bad_request_1.BadRequestException('Product not Found', root_1.ErrorCode.PRODUCT_NOT_FOUND);
    return (0, successResponce_1.successResponce)(req, res, 'Products Fetched successfully', successResponce_1.SuccessCode.SUSSESSFUL, product);
}));
