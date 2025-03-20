import { Request, Response } from "express";
import { tryCatchHandler } from "../middlewares/asyncHandler";
import { prismaClient } from "..";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { SuccessCode, successResponce } from "../middlewares/successResponce";

/**
 * Create Business Stream
 */
export const addBusinessStream = tryCatchHandler(async (req: Request, res: Response) => {
    const businessStream = await prismaClient.buissness_Stream.create({
        data: {
            ...req.body,
        },
    });

    return successResponce(req, res, "Business Stream created successfully", SuccessCode.CREATED, businessStream);
});

/**
 * Update Business Stream
 */
export const updateBusinessStream = tryCatchHandler(async (req: Request, res: Response) => {
    const { id, ...updateData } = req.body;

    const existingStream = await prismaClient.buissness_Stream.findUnique({
        where: { id },
    });

    if (!existingStream) {
        throw new BadRequestException("Business Stream not found", ErrorCode.NOT_FOUND);
    }

    const updatedStream = await prismaClient.buissness_Stream.update({
        where: { id },
        data: { ...updateData, updatedAt: new Date() },
    });

    return successResponce(req, res, "Business Stream updated successfully", SuccessCode.UPDATED, updatedStream);
});

/**
 * Delete Business Stream (Soft & Hard)
 */
export const deleteBusinessStream = tryCatchHandler(async (req: Request, res: Response) => {
    const { hardDelete } = req.body;
    const { id } = req.params;

    const existingStream = await prismaClient.buissness_Stream.findUnique({
        where: { id: +id },
    });

    if (!existingStream) {
        throw new BadRequestException("Business Stream not found", ErrorCode.NOT_FOUND);
    }

    if (hardDelete) {
        await prismaClient.buissness_Stream.delete({
            where: { id: +id },
        });
    } else {
        await prismaClient.buissness_Stream.update({
            where: { id: +id },
            data: { deletedAt: new Date() },
        });
    }

    return successResponce(req, res, "Business Stream deleted successfully", SuccessCode.DELETED);
});

/**
 * Get List of Business Streams (With Pagination)
 */
export const getBusinessStreams = tryCatchHandler(async (req: Request, res: Response) => {
    const currentPage = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;

    const count = await prismaClient.buissness_Stream.count({
        where: { deletedAt: null },
    });

    const businessStreams = await prismaClient.buissness_Stream.findMany({
        skip: (currentPage - 1) * limit,
        take: limit,
        where: { deletedAt: null },
        orderBy: { createdAt: "desc" },
    });

    return successResponce(req, res, "Business Streams fetched successfully", SuccessCode.SUCCESSFUL, {
        totalPages: Math.ceil(count / limit),
        currentPage,
        limit,
        businessStreams,
    });
});

/**
 * Get Single Business Stream
 */
export const getBusinessStream = tryCatchHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const businessStream = await prismaClient.buissness_Stream.findUnique({
        where: { id: +id },
    });

    if (!businessStream) {
        throw new BadRequestException("Business Stream not found", ErrorCode.NOT_FOUND);
    }

    return successResponce(req, res, "Business Stream fetched successfully", SuccessCode.SUCCESSFUL, businessStream);
});
