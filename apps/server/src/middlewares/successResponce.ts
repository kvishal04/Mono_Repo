import { Request, Response } from "express";

export const successResponce = (req: Request, res:Response , message: string , statusCode: number, data: any = null) => {
    return res.status(statusCode).json({
        message: message,
        statusCode,
        data
    })
}

export enum SuccessCode {
   CREATED = 201,
   UPDATED = 203,
   SUSSESSFUL = 200,
   DELETED = 203
}