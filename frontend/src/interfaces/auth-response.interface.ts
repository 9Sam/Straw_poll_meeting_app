import { UserI } from "./user.interface";

export interface IAuthResponse {
   status: number;
   body: {
      token: string;
      user: UserI;
   };
}
