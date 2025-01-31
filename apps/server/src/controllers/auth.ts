import { NextFunction, Request, Response } from "express"
import { prismaClient } from "..";
import { compareSync, hashSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWTSECRET } from "../secrets";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { tryCatchHandler } from "../middlewares/asyncHandler";
import { SuccessCode, successResponce } from "../middlewares/successResponce";


export const login = tryCatchHandler(async (req: Request, res: Response, next: NextFunction) => {

        const { email, password} = req.body;
        let user  =  await prismaClient.user.findFirst({
            where: {
                email
            },
            include: {
                addresses: true,
            },
        })
    
        if(!user){
            // find user
            throw new BadRequestException('User does not exist', ErrorCode.USER_NOT_FOUND);
        }
    
       
        if(!compareSync(password, user.password)){
            // compare password
            throw new BadRequestException('Invalid Password !', ErrorCode.INNCORRECT_PASSWORD);
        }
    
        
        let token =  jwt.sign({
            user
        }, JWTSECRET , { expiresIn: '8h' });
        
        return successResponce(req, res, 'User login successfully', SuccessCode.SUSSESSFUL, {token,  user})
})

export const signup = tryCatchHandler(
    async (req: Request, res: Response, next: NextFunction) => {

        const { email, name, password} = req.body; 
        let user  =  await prismaClient.user.findUnique({
            where: {
                email
            }
        })
        
        if(user){
            // throw Error('User already Exist')
            throw new BadRequestException('User already Exist', ErrorCode.USER_ALREADY_EXIST, user);
            
        }

        user =  await prismaClient.user.create({
            data :  {
                name,
                email,
                password: hashSync(password, 10)
            }
        })

        return successResponce(req, res, 'User created successfully', SuccessCode.CREATED, user)
    }
)  

export const updateUser = tryCatchHandler(
    async (req: Request, res: Response, next: NextFunction)=>{
    
    // const 
})



export const loginById = (req: Request, res: Response) => {
    res.send(" loginById Works")
}