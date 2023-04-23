import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";


const app = express();
dotenv.config();
mongoose.set("strictQuery", true);


const connect = async ()=> {

try {
  await mongoose.connect(process.env.MONGO);
  console.log("Connected to mongoDB");
} catch (error) {
  console.log(error);
}}


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(5000, () => {
  connect();
  console.log('Server listening on port 5000');
});
