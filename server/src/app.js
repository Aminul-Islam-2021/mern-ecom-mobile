// import files & packages
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import AuthRoutes from './routes/authRoute.js';
import UserRoutes from './routes/userRoute.js';
import ProductRoutes from './routes/productRoute.js';
import CategoryRoutes from './routes/categoryRoute.js';
import OrderRoutes from './routes/orderRoute.js';

import {dbConnect} from './config/dbConfig.js'

// initialize app
const app = express();

// invoke & connect the database
dbConnect()

// built-in middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// imported middlewares 
app.use(cors())
app.use(cookieParser())

// routes
app.use("/api/auth",AuthRoutes)
app.use("/api/user",UserRoutes)
app.use("/api/product",ProductRoutes)
app.use("/api/category",CategoryRoutes)
app.use("/api/order",OrderRoutes)

//export the app
export default app;