import express from "express";
import connectDB from "./config/db/db.js";
import userRoutes from "./routes/user.routes.js";
import bookRouter from "./routes/book.routes.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", userRoutes)
app.use("/api/book", bookRouter);

app.get("/", ()=>{
  console.log("Hello world")
})
const startServer = async () => {
  try {
    await connectDB(); 
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

startServer();
