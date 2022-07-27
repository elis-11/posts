import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.router.js";
import postRouter from "./routes/posts.router.js";
import commentRouter from "./routes/comments.router.js";
import fileUpload from "express-fileupload";

const app = express();
dotenv.config();  
const PORT = process.env.PORT || 5555;

// Middleware
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static('uploads'));

// app.get("/", (req, res) => {
//   return res.json({ message: "Hello, world!" });
// });

app.get("/", (req, res) => {
    res.send(`
    <h2>Welcome!</h2>
  <div>Routes:</div>
  <div>Users: <a href="/api/auth">/users</a></div>
  <div>Posts: <a href="/api/posts">/posts</a></div>
  <div>Comments: <a href="/api/comments">/comments</a></div>
  `);
});
{/* <div> Frontend URL: <a href="${process.env.FRONTEND_ORIGIN}"> ${process.env.FRONTEND_ORIGIN}</a></div> */}
  

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);

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
