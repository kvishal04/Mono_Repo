import { Request, Response, NextFunction } from 'express';
import { validationResult  } from 'express-validator'; // Assuming you're using express-validator
import { BadRequestException } from '../exceptions/bad-request';
import { ErrorCode } from '../exceptions/root';
import { tryCatchHandler } from '../middlewares/asyncHandler';

export const validate = tryCatchHandler(async (req: Request, res: Response, next: NextFunction) => {
  // Get the validation result
  const errors = validationResult(req);

  // If no errors, proceed to the next middleware/controller
  if (errors.isEmpty()) {
    return next();
  }
  

  const extractedErrors: { [key: string]: string[] } = {};
  // Extract errors in the required format
  errors.array().forEach((err: any) => {
    if (!extractedErrors[err.path]) {
      // If field doesn't exist in the object, create an array for it
      extractedErrors[err.path] = [];
    }
    // Push the error message to the field's error array
    extractedErrors[err.path].push(err.msg);
  });


  // Return a 400 response with validation error messages
  next( new BadRequestException("UNPROCESSABLE_ENTITY", ErrorCode.UNPROCESSABLE_ENTITY, extractedErrors))
});
