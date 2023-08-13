import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IreqUser } from "../../extender";

interface PayloadI {
   _id: string;
   iat: number;
   exp: number;
}

// Middelware
export const TokenValidation = (
   req: IreqUser,
   res: Response,
   next: NextFunction
): any => {
   try {
      const token = req.header("auth-token");

      if (!token) return res.status(401).json("Access denied!, No token sent");

      const payload = jwt.verify(token, process.env.SECRET_KEY!) as PayloadI;
      req.userId = payload._id;
   } catch (error) {
      return res.status(500).json("Jwt malformed or expired");
   }

   next();
};
