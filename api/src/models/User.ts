import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
   username: string;
   email: string;
   password?: string;
   friends?: string[];
   photo?: string;
   updateOne(): any;
   save(): any;
   encryptPassword(password: string): Promise<string>;
   validatePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema({
   username: {
      type: String,
      required: true,
      min: 4, // Name minimun length
      lowercase: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
   },
   password: {
      type: String,
      required: true,
   },
   friends: [String],
   photo: {
      type: String,
   },
});

// Encrypt password
userSchema.methods.encryptPassword = async (
   password: string
): Promise<string> => {
   const salt = await bcrypt.genSalt(10);
   return bcrypt.hash(password, salt);
};

// Decrypt password
userSchema.methods.validatePassword = async function (
   password: string
): Promise<boolean> {
   return await bcrypt.compare(password, this.password);
};

export default model<IUser>("User", userSchema);
