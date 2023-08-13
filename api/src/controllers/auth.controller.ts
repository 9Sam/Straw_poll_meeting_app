import { Request, Response } from "express";
import dotenv from "dotenv";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
dotenv.config();

//? Register a new user
export const singup = async (
   req: Request,
   res: Response
): Promise<Response> => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
   // Saving user
   const user: IUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      photo: req.body.photo,
   });

   if (user.password) {
      user.password = await user.encryptPassword(user.password);
   }

   const existingUser = await User.findOne({ email: req.body.email });
   if (existingUser) return res.status(400).json("User already exists");

   const savedUser = await user.save();

   // Token
   const token: string = jwt.sign(
      { id: savedUser._id },
      process.env.SECRET_KEY!
   );

   return res.header("auth-token", token).json(savedUser);
};

//? Log in to the app
export const singin = async (req: Request, res: Response): Promise<any> => {
   res.setHeader("Access-Control-Expose-Headers", "auth-token");

   const user = await User.findOne({ email: req.body.email });
   // Validate user
   if (!user) return res.status(401).json("Wrong email or password");

   const correctPassword: boolean = await user.validatePassword(
      req.body.password
   );
   // Validate password
   if (!correctPassword) return res.status(401).json("Wrong email or password");

   const token: string = jwt.sign({ _id: user._id }, process.env.SECRET_KEY!, {
      expiresIn: 60 * 10 * 1000000,
   });

   const userWithoutPassword = { ...user.toObject() };
   delete userWithoutPassword.password;

   res.header("auth-token", token).json(userWithoutPassword);
};

// //TODO: To delete
// export const profile = async (req: IreqUser, res: Response): Promise<any> => {
//    // if(!req.userId) return res.status(500).json("Server error");
//    console.log(req.body.userId)

//    const user = await User.findById(req.body.userId, { password: 0 });

//    if (!user) return res.status(404).json("No user found");

//    res.json(user);
// };

// //TODO: To delete
// export const validationTest = async (req: IreqUser, res: Response): Promise<any> => {
//    // const user = await User.findById(req.userId);

//    res.json(req.body);
// };
