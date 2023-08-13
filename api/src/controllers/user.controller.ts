import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";
import { SuccessResponse } from "../utils/successResponse";
import { encryptPassword } from "../utils/shared";

export const getUsers = async (_req: Request, res: Response) => {
   try {
      const users = await User.find({}, { password: 0 });
      return res.json(
         SuccessResponse.getReponse("Users recovered sucessfully", users)
      );
   } catch (err:any) {
      return res.status(500).json({ message: err.message });
   }
};

// GetUser {green,9}
export const getUser = async (req: Request, res: Response) => {
   const user = await User.findById(req.params.userId, { password: 0 });

   if (!user) return res.status(404).json(ErrorResponse.getNotFound(user));

   return res.json(
      SuccessResponse.getReponse("User recovered sucessfully", user)
   );
};

// UpadateUser {purple,13}
export const updateUser = async (req: Request, res: Response) => {
   console.log(req.params.userId)

   const user: IUser | null = await User.findByIdAndUpdate(req.params.userId, {
      username: req.body.username,
      email: req.body.email,
      password: await encryptPassword(req.body.password),
      photo: req.body.photo
   })

   if (!user) return res.status(404).json(ErrorResponse.getNotFound(user));

   return res.json(
      SuccessResponse.getReponse("User updated successfully", user)
   );
};

// DeleteUser {red,11}
export const deleteUser = async (req: Request, res: Response) => {
   const user = await User.findByIdAndDelete(req.params.userId);

   console.log(user)
   if (!user) return res.status(404).json(ErrorResponse.getNotFound(user));


   return res.json(
      SuccessResponse.getReponse("User deleted successfully", user)
   );
};