import axios from "axios";
import { AuthUserI } from "../interfaces/auth-user.interface";
// import { jwtVerify } from "jose";
import jwt_decode from "jwt-decode";
import { GoogleUserI } from "../interfaces/google-user.interface";

const host: string = import.meta.env.VITE_MEETI_API;

const AuthService = {
   async signup(user: AuthUserI) {
      return await axios
         .post(`${host}/auth/signup`, {
            username: user.username,
            email: user.email,
            password: user.password,
         })
         .then((res) => res.data)
         .catch((err) => {
            console.log("No entró");
            throw new Error(err);
         });
   },

   async signin(user: AuthUserI) {
      return await axios
         .post(`${host}/auth/signin`, {
            email: user.email,
            password: user.password,
         })
         .then((res) => {
            const authToken: string | undefined = res.headers["auth-token"];

            return { user: res.data, headers: authToken };
         })
         .catch((err) => {
            throw new Error(err);
         });
   },

   getGoogleUser(credentials: string): GoogleUserI | null {
      try {
         const user: GoogleUserI = jwt_decode(credentials);

         console.log(user);
         return user;
      } catch (error) {
         console.error(error);
         return null;
      }
   },
};

export default AuthService;
