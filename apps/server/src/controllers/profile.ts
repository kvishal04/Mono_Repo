import { NextFunction, Request, Response } from "express"
import { prismaClient } from "..";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { tryCatchHandler } from "../middlewares/asyncHandler";
import { SuccessCode, successResponce } from "../middlewares/successResponce";



export const create_update_profile = tryCatchHandler(
    async (req: Request, res: Response, next: NextFunction) => {

        const { firstName, lastName, currentSalary, isAnnullyMonthly, currency} = req.body; 
        let seekerProfile = await prismaClient.seeker_Profile.findFirst({
            where: {
                userAccount : req.user.id
            }
        })   
        
        if(seekerProfile){
            // throw Error('User already Exist')
        seekerProfile = await prismaClient.seeker_Profile.update({
            where: {
                userAccount: req.user.id
            },
            data: {
                firstName,
                lastName,
                currentSalary,
                isAnnullyMonthly,
                currency
            }
        })   
            
        }

        seekerProfile = await prismaClient.seeker_Profile.create({
            data: {
                userAccount: req.user.id,
                firstName,
                lastName,
                currentSalary,
                isAnnullyMonthly,
                currency
            }
        })   

        return successResponce(req, res, 'User profile created successfully', SuccessCode.CREATED, seekerProfile)
    }
)  


export const create_education_details = tryCatchHandler(
    async (req: Request, res: Response, next: NextFunction) => {

        const { firstName, lastName, currentSalary, isAnnullyMonthly, currency} = req.body; 
        let seekerProfile = await prismaClient.seeker_Profile.findFirst({
            where: {
                userAccount : req.user.id
            }
        })   
        
        if(seekerProfile){
            // throw Error('User already Exist')
        seekerProfile = await prismaClient.seeker_Profile.update({
            where: {
                userAccount: req.user.id
            },
            data: {
                firstName,
                lastName,
                currentSalary,
                isAnnullyMonthly,
                currency
            }
        })   
            
        }

        seekerProfile = await prismaClient.seeker_Profile.create({
            data: {
                userAccount: req.user.id,
                firstName,
                lastName,
                currentSalary,
                isAnnullyMonthly,
                currency
            }
        })   

        return successResponce(req, res, 'User profile created successfully', SuccessCode.CREATED, seekerProfile)
    }
) 

export const create_update_educationDetails = tryCatchHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { educationalDetails } = req.body; // Expecting an array

            // Separate records: Updates vs. Creates
            const updates = educationalDetails.filter((detail: any) => detail.id);
            const creates = educationalDetails.filter((detail: any) => !detail.id);

            // Bulk Create
            let createdCount = 0;
            if (creates.length > 0) {
                const createResponse  = await prismaClient.education_Detail.createMany({
                    data: creates.map((detail: any) => ({
                        ...detail,
                        userAccount: req.user.id, // Ensure userAccount is set
                    })),
                });
                createdCount = createResponse.count;
            }

            let updatedRecords = [];
            if (updates.length > 0) {
                updatedRecords = await prismaClient.$transaction(
                    updates.map((detail: any) =>
                        prismaClient.education_Detail.update({
                            where: { id: detail.id },
                            data: { ...detail },
                        })
                    )
                );
            }

        return successResponce(req, res, 'User education updated successfully', SuccessCode.CREATED, {
            createdCount,
            updatedRecords,
        });
    }
);

export const frameSeekerSkillSet = tryCatchHandler(
    async (req: Request, res: Response) => {
        const { skillSetArray } = req.body;

        // Separate records: Updates vs. Creates
        const updates = skillSetArray.filter((detail: any) => detail.id);
        const creates = skillSetArray.filter((detail: any) => !detail.id);

        // Bulk Create
        let createdCount = 0;
        if (creates.length > 0) {
            const createResponse = await prismaClient.education_Detail.createMany({
                data: creates.map((detail: any) => ({
                    ...detail,
                    userAccount: req.user.id, 
                })),
            });
            createdCount = createResponse.count;
        }

        // Bulk Update (Using Transactions for Different Values)
        let updatedRecords = [];
        if (updates.length > 0) {
            updatedRecords = await prismaClient.$transaction(
                updates.map((detail: any) =>
                    prismaClient.education_Detail.update({
                        where: { id: detail.id },
                        data: { ...detail }, // Each record gets different data
                    })
                )
            );
        }

        return successResponce(req, res, 'User Skills updated successfully', SuccessCode.CREATED, {
            createdCount,
            updatedRecords,
        });
    }
);

export const buildSeekerExperience = tryCatchHandler(
    async (req: Request, res: Response) => {
        const { experienceArray } = req.body;

        // Separate records: Updates vs. Creates
        const updates = experienceArray.filter((detail: any) => detail.id);
        const creates = experienceArray.filter((detail: any) => !detail.id);

        // Bulk Create
        let createdCount = 0;
        if (creates.length > 0) {
            const createResponse = await prismaClient.experience_Deatils.createMany({
                data: creates.map((detail: any) => ({
                    ...detail,
                    userAccount: req.user.id, 
                })),
            });
            createdCount = createResponse.count;
        }

        // Bulk Update (Using Transactions for Different Values)
        let updatedRecords = [];
        if (updates.length > 0) {
            updatedRecords = await prismaClient.$transaction(
                updates.map((detail: any) =>
                    prismaClient.experience_Deatils.update({
                        where: { id: detail.id },
                        data: { ...detail }, // Each record gets different data
                    })
                )
            );
        }

        return successResponce(req, res, 'User experience updated successfully', SuccessCode.UPDATED, {
            createdCount,
            updatedRecords,
        });
    }
);




