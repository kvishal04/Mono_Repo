import express, {Express, Request, Response} from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes";
import { PrismaClient } from '@prisma/client'
import { errorMiddleware } from "./middlewares/errors";




const app:Express = express()
app.use(express.json());
app.use('/api', rootRouter)
app.use(errorMiddleware)

export const prismaClient = new PrismaClient({
    // log: ['query']
})

app.listen(PORT, ()=>{
    console.log('App working');
    
})