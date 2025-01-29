import { NextFunction, Request, Response } from "express";
import { ErrorCode, HttpException } from "../exceptions/root";
import { InternalException } from "../exceptions/internal-exception";

// utils/tryCatch.js
export const tryCatchHandler = (controllerFunction: Function) => {
    return async function (req: Request, res: Response, next: NextFunction) {
      try {
        await controllerFunction(req, res, next); // Await the async function
      } catch (error: any) {
        let exceptions: HttpException;
        if(error instanceof HttpException){
            exceptions = error
        }else{
            exceptions = new InternalException('Something Went Wrong', ErrorCode.INTERNAL_EXPECTION, error)
        }
         next(exceptions); // Pass the error to next()
      }
    };
  };