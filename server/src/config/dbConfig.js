import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const dbConnect=async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Database connected successfully")
  }catch(error){
    console.log("Failed to connect database")
    process.exit(1)
  }
}