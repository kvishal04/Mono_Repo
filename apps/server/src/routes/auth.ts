import { Router } from 'express'
import { login, loginById, signup } from '../controllers/auth'
import { userValidationRules } from '../schemas/userValidationSchema'
import { validate } from '../schemas/validateSchema'

const authRoutes: Router = Router()

authRoutes.route('/')
    .get(userValidationRules("login"), validate, login)
    .post(userValidationRules('registerUser'), validate,  signup)
    
export default authRoutes