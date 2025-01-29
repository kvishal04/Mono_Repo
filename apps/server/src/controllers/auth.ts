import { NextFunction, Request, Response } from "express"
import { prismaClient } from "..";
import { compareSync, hashSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWTSECRET } from "../secrets";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { tryCatchHandler } from "../middlewares/asyncHandler";


export const login = tryCatchHandler(async (req: Request, res: Response, next: NextFunction) => {

        const { email, password} = req.body;
        let user  =  await prismaClient.user.findFirst({
            where: {
                email
            }
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
        
        return res.status(200).json({token,  user: {id: user.id, name: user.name, email: user.email}})
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
        return res.status(200).json(user) 
    }
)  



export const loginById = (req: Request, res: Response) => {
    res.send(" loginById Works")
}