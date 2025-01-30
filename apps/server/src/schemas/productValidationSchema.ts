import { check , param} from 'express-validator';

export const ProductValidationRules = (args: string) => {
  switch (args) {
    case 'create':
      return [
        check('name', 'please enter product name').notEmpty(),
        check('description', 'please enter product description').notEmpty(),
        check('price', 'please enter price ').notEmpty().isNumeric().withMessage('price should be in numbers'),
        check('tags', 'please enter tags').notEmpty(),
      ];

    case 'update':
      return [
        check('id', 'No product Id Provided').notEmpty().isNumeric().withMessage('Id should be in numbers'),
        check('name', 'please enter product name').optional().notEmpty(),
        check('description', 'please enter product description').optional().notEmpty(),
        check('price', 'please enter price ').optional().notEmpty().isNumeric().withMessage('price should be in numbers'),
        check('tags', 'please enter tags').optional().notEmpty(),
      ];

    case 'delete':
      return [
        check('ids', 'please enter product id').notEmpty().isArray({min: 1}).withMessage('Please select one product atleast'),
      ];

    case 'getone':
      return [
        param('id', 'please enter product id').notEmpty().isNumeric().withMessage('Please prove valid user id'),
      ];
  

    default:
      return []; // Ensure this is always an array (even empty) to avoid undefined errors
  }
};
