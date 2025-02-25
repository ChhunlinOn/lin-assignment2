import express, { Request, Response } from "express";
import dotenv from "dotenv";
import "reflect-metadata"
import { AppDataSource } from "./data-source";
import { error } from "console";
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

AppDataSource.initialize()
.then(()=>{
    console.log('Data suorce was intailize')
}).catch((error) => console.log(error));

// Default Route
app.get("/", (req: Request, res: Response) => {
  res.send(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
