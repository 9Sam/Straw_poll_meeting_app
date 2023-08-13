import { Request } from "express"

export interface IreqUser extends Request { //extending the request object
    userId?: string;
}