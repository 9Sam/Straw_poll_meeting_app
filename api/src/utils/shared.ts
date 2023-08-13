import bcrypt from 'bcryptjs';

// Encrypt password;
export const encryptPassword = async (password: string): Promise<string> => {
   const salt = await bcrypt.genSalt(10)
   return bcrypt.hash(password, salt);
}