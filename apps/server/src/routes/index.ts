import { Router } from 'express'
import authRoutes from './auth'
import productsRoute from './products'
import { authUser } from '../middlewares/auth'
import { authAdmin } from '../middlewares/admin'
import addressRoutes from './address'


const rootRouter: Router = Router()
rootRouter.use('/auth', authRoutes)
rootRouter.use('/products', [authUser], productsRoute)
rootRouter.use('/address', [authUser], addressRoutes)

export default rootRouter