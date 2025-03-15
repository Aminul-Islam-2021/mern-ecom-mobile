import Auth from '../models/authModel.js'
import encrypt from 'bcryptjs'
// create
// route:
// method: POST
// access:
export const create=async(req,res)=>{
  try{
    const {username,email,password}=req.body
    
    const existingEmail=await Auth.findOne({email})
    if(existingEmail){
      return res.status(400).json("Email already exists")
    }
    const salt =await encrypt.genSalt(10)
    const hashedPassword=await encrypt.hash(password,salt)
    const user = await Auth.create({username,email,password:hashedPassword})
    if(!user){
      return res.status(400).json("User creation failed")
    }
    
   res.status(200).json({message:"created successfully",user})
  }catch(error){
    res.status(500).json(error.message)
  }
}

// read
// route:
// method: GET
// access:
export const read=async(req,res)=>{
  try{
   res.status(200).json("getting successfully")
  }catch(error){
    res.status(500).json(error.message)
  }
}

// update
// route:
// method: PUT
// access:
export const update=async(req,res)=>{
  try{
   res.status(200).json("updated successfully")
  }catch(error){
    res.status(500).json(error.message)
  }
}

// delete
// route:
// method: DELETE
// access:
export const deleted =async(req,res)=>{
  try{
   res.status(200).json("deleted successfully")
  }catch(error){
    res.status(500).json(error.message)
  }
}

