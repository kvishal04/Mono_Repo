import { check, param } from 'express-validator';

export const addressValidationRules = (args: string) => {
  switch (args) {
    
    case 'AddAddress':
      return [
        check('lineOne')
          .notEmpty().withMessage('please enter address'),
        check('city')
          .notEmpty().withMessage('please enter city'),
        check('country')
          .notEmpty().withMessage('please enter city'),
        check('pincode')
          .notEmpty().withMessage('please enter pincode'),
    ];

    case 'Update Address':
      return [
        check('id', 'No Address Id Provided').notEmpty().isNumeric().withMessage('Id should be in numbers'),
        check('lineOne')
          .notEmpty().withMessage('please enter address'),
        check('city').optional()
          .notEmpty().withMessage('please enter city'),
        check('country').optional()
          .notEmpty().withMessage('please enter city'),
        check('pincode')
          .notEmpty().withMessage('please enter pincode'),
    ];
    case 'Verify Address id':
      return [
        param('id', 'please enter address id').notEmpty().isNumeric().withMessage('Please prove valid address id'),
        
    ];

    default:
      return []; // Ensure this is always an array (even empty) to avoid undefined errors
  }
};


  