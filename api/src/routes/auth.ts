import router from "./user";
import {
   singin,
   singup,
   // profile,
   // validationTest,
} from "../controllers/auth.controller";
// import { TokenValidation } from "../middlewares/verifyToken";
import { validateSignup, validateSignin } from "../validators/auth.validators";

router.post("/signup", validateSignup, singup);
router.post("/signin", validateSignin, singin);
// router.get("/profile/:userId", TokenValidation, profile);
// router.get("/validationsTest", TokenValidation, validateSignin, validationTest);

export default router;
