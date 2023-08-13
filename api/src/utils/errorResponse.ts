type ErrorStatus = 400 | 401 | 402 | 403 | 404 | 500;

interface IStatus {
    status: ErrorStatus;
    message: string;
    response: any;
}

export class ErrorResponse{
    static getForbbidenError = (response: any): IStatus =>  {
        return {
            status: 403,
            message: "Forbbiden access",
            response: response
        }
    }

    static getNotFound = (response: any): IStatus =>  {
        return {
            status: 404,
            message: "Not found",
            response: response
        }
    }
    
    static getServerError = (response: any): IStatus =>  {
        return {
            status: 500,
            message: "Server error",
            response: response
        }
    }
}

