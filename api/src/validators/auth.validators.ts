import { body } from "express-validator";
// import { Response, NextFunction } from "express";
// import { IreqUser } from "../../extender";

// Handling custom validations
// const validateResult = (req: IreqUser, res: Response, next: NextFunction) => {
//    const errors = validationResult(req);
//    if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//    }

//    return next();
// };

// Creating custom validators
// const isValidPassword: CustomValidator = (value) => {
//    console.log(value);
//    if (value[0] != value[0].toUpperCase()) {
//       return Promise.reject("It must start with upper case");
//    }
//    return Promise.resolve(true);
// };

export const validateSignin = [
   body("email").exists().isEmail().withMessage("Invalid email"),
   body("password")
      .matches(/\d/)
      .withMessage("must contain a number")
   //    .custom(isValidPassword),
   // (req: IreqUser, res: Response, next: NextFunction) => {
   //    validateResult(req, res, next);
   // },
];

export const validateSignup = [
   body("username")
      .exists()
      .not()
      .isEmpty()
      .withMessage("Invalid username format"),
   body("email").exists().isEmail().withMessage("Invalid email format"),
   body("password").exists().isString().withMessage("Invalid password format"),
   body("photo").exists().withMessage("'photo' must be a defined"),
   body("photo").isString().withMessage("'photo' must be a string"),
];
