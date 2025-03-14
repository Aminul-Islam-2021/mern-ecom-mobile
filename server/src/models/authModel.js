import mongoose from 'mongoose'

const demoSchema=new mongoose.Schema({
  demo1:{
    type:String,
    required:[true,"demo1 is required"]
  },
  demo2:{
    type:Number,
    required:[true,"demo2 is required"]
  }, 
  demo3:{
    type:mongoose.types.objectId,
    ref:"Demo4"
    required:[true,"demo1 is required"]
  },
},{timestamps:true})

const Demo = mongoose.model("Demo",demoSchema)

export default Dem