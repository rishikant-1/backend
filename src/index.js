import dotenv  from "dotenv"

import express from "express";
import connectDB from "./db/index.js";

const app= express()

dotenv.config({
  path: './env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log("Server is running prosses", process.env.PORT)
    
  })
})
.catch((err)=>{
  console.log("MongoDB connection failed", err)
})





























// ;(async (params) => {
//   try {
//     mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//     app.on("error", (error)=>{
//       console.log("Error", error)
//       throw error
//     })


//     app.listen(process.env.PORT,()=>{
//       console.log(`App is listen on ${process.env.PORT}`)
//     })

//   } catch (error) {
//     console.log("Error:", error)
//     throw error
    
//   }
//  })