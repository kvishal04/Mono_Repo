import dotenv from 'dotenv';

dotenv.config({
    path: '.env'
})

export const PORT = process.env.PORT
export const URL = process.env.DATABASE_URL
export const JWTSECRET = process.env.JWTSECRET || '12345'
export const DATABASE_URL_MONGO = process.env.DATABASE_URL_MONGO
