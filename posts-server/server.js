import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5555;


// Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
  return res.json({message: 'Hello, world!'}); 
})


async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server listening at http://localhost:` + PORT)
    );
  } catch (error) {
    console.log(error);
  }
}
start();

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>console.log('DB connected!'))
// .catch((err)=>console.log('[ERROR] DB Connection failed!', err.message))

// const PORT=process.env.PORT
// app.listen(PORT, (req, res)=>{
//     console.log(`Server listening at http://localhost:` + PORT);
// })
