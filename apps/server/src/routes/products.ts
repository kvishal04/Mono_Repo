import { Router } from 'express'
import { ProductValidationRules } from '../schemas/productValidationSchema'
import { validate } from '../schemas/validateSchema'
import { createProduct } from '../controllers/product'


const productsRoute: Router = Router()

productsRoute.route('/')
    .post(ProductValidationRules('create'), validate, createProduct)

    
export default productsRoute