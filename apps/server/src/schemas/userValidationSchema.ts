import { check } from 'express-validator';

export const userValidationRules = (args: string) => {
  switch (args) {
    case 'login':
      return [
        check('email', 'please enter email').notEmpty(),
        check('password', 'please enter password').notEmpty(),
      ];

    case 'registerUser':
      return [
        check('name')
          .notEmpty().withMessage('please enter user name'),
        check('email')
          .notEmpty().withMessage('please enter email')
          .isEmail().withMessage('please enter a valid email'),
        check('password')
          .notEmpty().withMessage('please enter password')
          .isLength({ min: 6 }).withMessage('password length should be of minimum 6 characters'),
        check('deletedAt')
          .optional()
          .isDate().withMessage('It must be a date format'),
      ];

    default:
      return []; // Ensure this is always an array (even empty) to avoid undefined errors
  }
};
