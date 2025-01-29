import { ErrorCode, HttpException } from "./root";

export class InternalException extends HttpException{
    constructor(message: string, errorCode: ErrorCode, error?: null | any) {
        super(message, errorCode, 400, error);
    }
}