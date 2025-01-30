import { Router } from 'express'
import { addAddress, deleteAddress, getAddress, getAddressList, updateAddress } from '../controllers/address'
import { addressValidationRules } from '../schemas/AddressValidationSchema'
import { validate } from '../schemas/validateSchema'

const addressRoutes: Router = Router()

addressRoutes.route('/')
    .post(addressValidationRules("AddAddress"), validate, addAddress)
    .put(addressValidationRules('Update Address'), validate,  updateAddress)
    .get(getAddressList)

addressRoutes.route('/:id')
    .get(addressValidationRules("Verify Address id"), validate, getAddress)
    .delete(addressValidationRules('Verify Address id'), validate,  deleteAddress)
    
export default addressRoutes