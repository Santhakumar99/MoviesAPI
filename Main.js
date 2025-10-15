import express, { urlencoded } from "express"
import dotenv from "dotenv";
dotenv.config(); // ✅ Load env vars BEFORE anything else

// import express from "express";
import movieRoutes from "./Routes/movies.route.js";
import connectDB from "./lib/dbConnection.js";

const app = express();
const port = 3000;

// Connect to DB
connectDB();


// data understanding middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Middleware
app.use('/movies', movieRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
