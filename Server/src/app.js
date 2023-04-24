import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import gigRoute from "./routes/gigRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import orderRoute from "./routes/orderRoute.js";
import messageRoute from "./routes/messageRoute.js";
import conversationRoute from "./routes/coversationRoute.js";



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


app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/messages", messageRoute);
app.use("/api/conversations", conversationRoute);


app.listen(5000, () => {
  connect();
  console.log('Server listening on port 5000');
});
