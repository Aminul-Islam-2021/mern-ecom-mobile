// import files & packages
import app from './app.js'
import dotenv from 'dotenv'

// configure dotenv file 
dotenv.config();

// configure port
const port = process.env.PORT || 5000

// listening or run the app
app.listen(port,()=>{
  console.log(`Server is running on port : ${port}`)
})
