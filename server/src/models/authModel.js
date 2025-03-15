import mongoose from 'mongoose'

const authSchema=new mongoose.Schema({
  username:{
    type:String,
    required:[true,"username is required"]
  },
  email:{
    type:String,
    required:[true,"email is required"],
    unique:true,
    trim:true
  }, 
  password:{
    type:String,
    required:[true,"password is required"],
    minlength:[8,"password must be at least 8 characters"]
  },
  role:{
    type:String,
    enum:["admin","user"],
    default:"user",
  }
},{timestamps:true})

const Auth = mongoose.model("Auth",authSchema)

export default Auth;