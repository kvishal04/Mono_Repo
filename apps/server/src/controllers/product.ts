import { Request, Response } from "express"
import { tryCatchHandler } from "../middlewares/asyncHandler"
import { prismaClient } from "..";



export const createProduct = tryCatchHandler(async(req: Request, res: Response) => {

    const product  = await prismaClient.product.create({
        data: {
            ...req.body,
            tags: req.body.tags.join(",")
        }
    })

    return res.status(201).json({data: product})

})