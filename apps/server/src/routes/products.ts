import { Router } from 'express'
import { ProductValidationRules } from '../schemas/productValidationSchema'
import { validate } from '../schemas/validateSchema'
import { createProduct, deleteProduct, getProduct, getProductList, updateProduct } from '../controllers/product'
import { authAdmin } from '../middlewares/admin'


const productsRoute: Router = Router()

productsRoute.route('/')
    .post([authAdmin], ProductValidationRules('create'), validate, createProduct)
    .put([authAdmin], ProductValidationRules('update'), validate, updateProduct)
    .get(getProductList)
    .delete([authAdmin], ProductValidationRules('delete'), validate, deleteProduct)
    
productsRoute.route('/:id')
    .get(ProductValidationRules('getone'), validate, getProduct)

export default productsRoute
