import { Request, Response } from "express";
import { tryCatchHandler } from "../middlewares/asyncHandler";
import { prismaClient } from "..";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { SuccessCode, successResponce } from "../middlewares/successResponce";

export const addSkillSet = tryCatchHandler(async (req: Request, res: Response) => {
    const skillSet = await prismaClient.skillSet.create({
        data: { skillSetName: req.body.skillSetName },
    });

    return successResponce(req, res, "Skill Set created successfully", SuccessCode.CREATED, skillSet);
});

export const updateSkillSet = tryCatchHandler(async (req: Request, res: Response) => {
    const skillSet = await prismaClient.skillSet.findFirst({
        where: { id: +req.params.id },
    });

    if (!skillSet) throw new BadRequestException("Skill Set not found", ErrorCode.SKILLSET_NOT_FOUND);

    const updatedSkillSet = await prismaClient.skillSet.update({
        where: { id: skillSet.id },
        data: {
            skillSetName: req.body.skillSetName,
            updatedAt: new Date(),
        },
    });

    return successResponce(req, res, "Skill Set updated successfully", SuccessCode.UPDATED, updatedSkillSet);
});

export const deleteSkillSet = tryCatchHandler(async (req: Request, res: Response) => {
    if (req.body.hardDelete) {
        await prismaClient.skillSet.delete({
            where: { id: +req.params.id },
        });
    } else {
        await prismaClient.skillSet.update({
            where: { id: +req.params.id },
            data: { deletedAt: new Date() },
        });
    }

    return successResponce(req, res, "Skill Set deleted successfully", SuccessCode.DELETED);
});

export const getSkillSetList = tryCatchHandler(async (req: Request, res: Response) => {
    const currentPage = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;

    const count = await prismaClient.skillSet.count({
        where: { deletedAt: null },
    });

    const skillSets = await prismaClient.skillSet.findMany({
        skip: (currentPage - 1) * limit,
        take: limit,
        where: { deletedAt: null },
        orderBy: { createdAt: "desc" },
    });

    return successResponce(req, res, "Skill Sets fetched successfully", SuccessCode.SUCCESSFUL, {
        totalPages: Math.ceil(count / limit),
        currentPage,
        limit,
        skillSets,
    });
});

export const getSkillSet = tryCatchHandler(async (req: Request, res: Response) => {
    const skillSet = await prismaClient.skillSet.findFirst({
        where: { id: +req.params.id, deletedAt: null },
    });

    if (!skillSet) throw new BadRequestException("Skill Set not found", ErrorCode.SKILLSET_NOT_FOUND);

    return successResponce(req, res, "Skill Set fetched successfully", SuccessCode.SUCCESSFUL, skillSet);
});
