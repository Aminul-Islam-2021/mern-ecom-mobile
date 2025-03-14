
// create
// route:
// method: POST
// access:
export const create=async(req,res)=>{
  try{
   res.status(200).json("created successfully")
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

