import express, {Express, Request, Response} from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes";
import { PrismaClient as PrismaClientMySQL } from '../generated/mysql';
import { PrismaClient as PrismaClientMongo } from '../generated/mongo';
import { errorMiddleware } from "./middlewares/errors";




const app:Express = express()
app.use(express.json());
app.use('/api', rootRouter)
app.use(errorMiddleware)

export const prismaClient = new PrismaClientMySQL();
export const prismaMongo = new PrismaClientMongo();


async function testConnections() {
    try {
      // Test MySQL connection
      await prismaClient.$connect();
      console.log("✅ MySQL Database Connected Successfully!");
  
      // Test MongoDB connection
      await prismaMongo.$connect();
      console.log("✅ MongoDB Database Connected Successfully!");
    } catch (error) {
      console.error("❌ Database Connection Error:", error);
    } finally {
      await prismaClient.$disconnect();
      await prismaMongo.$disconnect();
    }
}
  
  // Run the test
//   testConnections();

app.listen(PORT, ()=>{
    console.log('App working');
    
})