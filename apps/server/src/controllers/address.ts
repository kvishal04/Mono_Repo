import { Request, Response } from "express"
import { tryCatchHandler } from "../middlewares/asyncHandler"
import { prismaClient } from "..";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { SuccessCode, successResponce } from "../middlewares/successResponce";



export const addAddress = tryCatchHandler(async(req: Request, res: Response) => {

    const address  = await prismaClient.address.create({
        data: {
            ...req.body,
            userId: req.user.id
        }
    })

    return successResponce(req, res, 'Address created successfully', SuccessCode.CREATED, address)
    
})

export const updateAddress = tryCatchHandler(async (req: Request, res: Response) => {
    const address = await prismaClient.address.findFirst({
        where: { id: req.body.id },
    });

    if (!address) throw new BadRequestException('Address not Found', ErrorCode.ADDRESS_NOT_FOUND);

    const updatedAddress = await prismaClient.product.update({
        where: { id: address.id },
        data: {
            ...req.body,
            userId: req.user.id,
            updatedAt: new Date(), // Manually updating timestamp if required
        },
    })

    return successResponce(req, res, 'Address updated successfully', SuccessCode.UPDATED, updatedAddress)

});


export const deleteAddress = tryCatchHandler(async (req: Request, res: Response) => {
    
    if(req.body.hardDelete){
        await prismaClient.address.delete({
            where: { id: +req.params.id},
        })
    }else{
        await prismaClient.product.updateMany({
            where: { id: +req.params.id},
            data: {
                deletedAt : new Date(Date.now())
            }
        })
    }
    return successResponce(req, res, 'Address Deleted successfully', SuccessCode.DELETED)
});

export const getAddressList = tryCatchHandler(async (req: Request, res: Response) => {

    const currentPage = req.query.skip ? +req.query.skip : 1;
    const limit = req.query.limit ? +req.query.limit : 5;

    const count = await prismaClient.address.count({
        where: { deletedAt : null }
    })

    const address = await prismaClient.address.findMany({
        skip: currentPage ? ((currentPage - 1) * 5 ): 0,
        take: limit,
        where: { deletedAt : null }
    });

    if (!address) throw new BadRequestException('Address not Found', ErrorCode.ADDRESS_NOT_FOUND);
    return successResponce(req, res, 'Addresses Fetched successfully', SuccessCode.SUSSESSFUL, {
        totalPages:  limit > 0 ? Math.ceil(count / limit) : 1,
        currentPage,
        firstPage: 1,
        limit,
        address
    })

});

export const getAddress = tryCatchHandler(async (req: Request, res: Response) => {
    const address = await prismaClient.address.findFirst({
        where: { id: +req.params.id },
    });

    if (!address) throw new BadRequestException('Product not Found', ErrorCode.ADDRESS_NOT_FOUND);
    return successResponce(req, res, 'Address Fetched successfully', SuccessCode.SUSSESSFUL, address)

});