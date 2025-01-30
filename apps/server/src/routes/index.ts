import { Router } from 'express'
import authRoutes from './auth'
import productsRoute from './products'
import { authUser } from '../middlewares/auth'
import { authAdmin } from '../middlewares/admin'


const rootRouter: Router = Router()
rootRouter.use('/auth', authRoutes)
rootRouter.use('/products', [authUser], productsRoute)

export default rootRouter