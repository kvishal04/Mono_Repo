// message, statusCode, error codes

export class HttpException extends Error {
   
    message: string;
    errorCode: ErrorCode;
    statusCode: number;
    errors: any;


    constructor (message:string, errorCode:ErrorCode, statusCode:number, errors: any){
        super(message)
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.errors = errors;
    }
}

export enum ErrorCode {
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXIST = 1002,
    INNCORRECT_PASSWORD = 1003, 
    FUNCTION_WENT_WRONG = 1004,
    UNPROCESSABLE_ENTITY = 20001,
    INTERNAL_EXPECTION = 30001,
    INVALID_AUTH_TOKEN = 40001,
    INVALID_USER = 50001,
    PRODUCT_NOT_FOUND = 2001,
}