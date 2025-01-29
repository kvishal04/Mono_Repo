import { NextFunction, Request, Response } from "express";
import { tryCatchHandler } from "./asyncHandler";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";

// Extend Express Request to include `user`
declare global {
  namespace Express {
    interface Request {
      user?: any; // Ideally, replace `any` with a proper User type
    }
  }
}

export const authAdmin = tryCatchHandler(async (req: Request, res: Response, next: NextFunction) => {
    
    if (!req.user) {
      throw new BadRequestException("User does not exist", ErrorCode.USER_NOT_FOUND);
    }
    console.log("req.user.role",req.user.role);
    
    if(req.user.role !== 'ADMIN'){
        throw new BadRequestException("Wrong  !", ErrorCode.INVALID_USER)
    }
    next();
});
