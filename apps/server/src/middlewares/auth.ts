import { NextFunction, Request, Response } from "express";
import { ErrorCode } from "../exceptions/root";
import { InternalException } from "../exceptions/internal-exception";
import { tryCatchHandler } from "./asyncHandler";
import { BadRequestException } from "../exceptions/bad-request";
import jwt from "jsonwebtoken";
import { JWTSECRET } from "../secrets";
import { prismaClient } from "..";

// Extend Express Request to include `user`
declare global {
  namespace Express {
    interface Request {
      user?: any; // Ideally, replace `any` with a proper User type
    }
  }
}

export const authUser = tryCatchHandler(async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new BadRequestException("No Token Found! Authentication Error", ErrorCode.INVALID_AUTH_TOKEN);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWTSECRET) as { user: {email: string} }; // Explicitly type decoded token
    console.log('decoded',decoded);
    
    const user = await prismaClient.user.findUnique({
      where: { email: decoded.user.email },
    });

    console.log("user",user);
    
    if (!user) {
      throw new BadRequestException("User does not exist", ErrorCode.USER_NOT_FOUND);
    }

    req.user = user;
    next();
  } catch (error) {
    throw new InternalException("Invalid or Expired Token", ErrorCode.INVALID_AUTH_TOKEN);
  }
});
