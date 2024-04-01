import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

// routes
import UserRoute from './routes/user.route.js'
import ChatRoute from './routes/chat.route.js'
import MessageRoute from './routes/message.route.js'

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();
const PORT = process.env.PORT;
app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Project Support',
  });
});

const CONNECTION = process.env.MONGODB_CONNECTION;
mongoose
  .connect(CONNECTION)
  .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.use('/user', UserRoute)
app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)