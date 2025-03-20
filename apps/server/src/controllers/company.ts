import { Request, Response } from "express";
import { tryCatchHandler } from "../middlewares/asyncHandler";
import { prismaClient } from "..";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { SuccessCode, successResponce } from "../middlewares/successResponce";

/**
 * Create Company Profile
 */
export const addCompanyProfile = tryCatchHandler(async (req: Request, res: Response) => {
    const companyProfile = await prismaClient.company_Profile.create({
        data: {
            ...req.body,
        },
    });

    return successResponce(req, res, "Company Profile created successfully", SuccessCode.CREATED, companyProfile);
});

/**
 * Update Company Profile
 */
export const updateCompanyProfile = tryCatchHandler(async (req: Request, res: Response) => {
    const { id, ...updateData } = req.body;

    const existingProfile = await prismaClient.company_Profile.findUnique({
        where: { id },
    });

    if (!existingProfile) {
        throw new BadRequestException("Company Profile not found", ErrorCode.NOT_FOUND);
    }

    const updatedProfile = await prismaClient.company_Profile.update({
        where: { id },
        data: { ...updateData, updatedAt: new Date() },
    });

    return successResponce(req, res, "Company Profile updated successfully", SuccessCode.UPDATED, updatedProfile);
});

/**
 * Delete Company Profile (Soft & Hard)
 */
export const deleteCompanyProfile = tryCatchHandler(async (req: Request, res: Response) => {
    const { hardDelete } = req.body;
    const { id } = req.params;

    const existingProfile = await prismaClient.company_Profile.findUnique({
        where: { id: +id },
    });

    if (!existingProfile) {
        throw new BadRequestException("Company Profile not found", ErrorCode.NOT_FOUND);
    }

    if (hardDelete) {
        await prismaClient.company_Profile.delete({
            where: { id: +id },
        });
    } else {
        await prismaClient.company_Profile.update({
            where: { id: +id },
            data: { deletedAt: new Date() },
        });
    }

    return successResponce(req, res, "Company Profile deleted successfully", SuccessCode.DELETED);
});

/**
 * Get List of Company Profiles (With Pagination)
 */
export const getCompanyProfiles = tryCatchHandler(async (req: Request, res: Response) => {
    const currentPage = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;

    const count = await prismaClient.company_Profile.count({
        where: { deletedAt: null },
    });

    const companyProfiles = await prismaClient.company_Profile.findMany({
        skip: (currentPage - 1) * limit,
        take: limit,
        where: { deletedAt: null },
        include: { buisnessStream: true },
        orderBy: { createdAt: "desc" },
    });

    return successResponce(req, res, "Company Profiles fetched successfully", SuccessCode.SUCCESSFUL, {
        totalPages: Math.ceil(count / limit),
        currentPage,
        limit,
        companyProfiles,
    });
});

/**
 * Get Single Company Profile
 */
export const getCompanyProfile = tryCatchHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const companyProfile = await prismaClient.company_Profile.findUnique({
        where: { id: +id },
        include: { buisnessStream: true },
    });

    if (!companyProfile) {
        throw new BadRequestException("Company Profile not found", ErrorCode.NOT_FOUND);
    }

    return successResponce(req, res, "Company Profile fetched successfully", SuccessCode.SUCCESSFUL, companyProfile);
});
