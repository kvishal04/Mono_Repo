import { Request, Response } from "express"
import { tryCatchHandler } from "../middlewares/asyncHandler"
import { prismaClient } from "..";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { SuccessCode, successResponce } from "../middlewares/successResponce";



export const createProduct = tryCatchHandler(async(req: Request, res: Response) => {

    const product  = await prismaClient.product.create({
        data: {
            ...req.body,
            tags: req.body.tags.join(",")
        }
    })

    return successResponce(req, res, 'Product created successfully', SuccessCode.CREATED, product)
    
})

export const updateProduct = tryCatchHandler(async (req: Request, res: Response) => {
    const product = await prismaClient.product.findFirst({
        where: { id: req.body.id },
    });

    if (!product) throw new BadRequestException('Product not Found', ErrorCode.PRODUCT_NOT_FOUND);

    const updatedProduct = await prismaClient.product.update({
        where: { id: product.id },
        data: {
            ...req.body,
            tags: req.body.tags ? req.body.tags.join(",") : product.tags, // Update only if provided
            updatedAt: new Date(), // Manually updating timestamp if required
        },
    })

    return successResponce(req, res, 'Product updated successfully', SuccessCode.UPDATED, updatedProduct)

});


export const deleteProduct = tryCatchHandler(async (req: Request, res: Response) => {
    
    if(req.body.hardDelete){
        await prismaClient.product.deleteMany({
            where: { id: {
                in : req.body.ids
            } },
        })
    }else{
        await prismaClient.product.updateMany({
            where: { id: {
                in : req.body.ids
            } },
            data: {
                deletedAt : new Date(Date.now())
            }
        })
    }
    return successResponce(req, res, 'Product Deleted successfully', SuccessCode.DELETED)
});

export const getProductList = tryCatchHandler(async (req: Request, res: Response) => {

    const currentPage = req.query.skip ? +req.query.skip : 1;
    const limit = req.query.limit ? +req.query.limit : 5;

    const count = await prismaClient.product.count({
        where: { deletedAt : null }
    })

    const product = await prismaClient.product.findMany({
        skip: currentPage ? ((currentPage - 1) * 5 ): 0,
        take: limit,
        where: { deletedAt : null }
    });

    if (!product) throw new BadRequestException('Product not Found', ErrorCode.PRODUCT_NOT_FOUND);
    return successResponce(req, res, 'Products Fetched successfully', SuccessCode.SUSSESSFUL, {
        totalPages:  limit > 0 ? Math.ceil(count / limit) : 1,
        currentPage,
        firstPage: 1,
        limit,
        product
    })

});

export const getProduct = tryCatchHandler(async (req: Request, res: Response) => {
    const product = await prismaClient.product.findFirst({
        where: { id: +req.params.id },
    });

    if (!product) throw new BadRequestException('Product not Found', ErrorCode.PRODUCT_NOT_FOUND);
    return successResponce(req, res, 'Products Fetched successfully', SuccessCode.SUSSESSFUL, product)

});