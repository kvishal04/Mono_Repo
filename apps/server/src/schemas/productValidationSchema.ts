import { check } from 'express-validator';

export const ProductValidationRules = (args: string) => {
  switch (args) {
    case 'create':
      return [
        check('name', 'please enter product name').notEmpty(),
        check('description', 'please enter product description').notEmpty(),
        check('price', 'please enter price ').notEmpty().isNumeric().withMessage('price should be in munbers'),
        check('tags', 'please enter tags').notEmpty(),
      ];

    default:
      return []; // Ensure this is always an array (even empty) to avoid undefined errors
  }
};
