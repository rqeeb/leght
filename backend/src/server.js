import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/api/auth/signup", (req,res) =>{
  res.send("signup endpoint");
});

app.get("/api/auth/login", (req,res) =>{
  res.send("login endpoint");
});

app.get("/api/auth/logout", (req,res) =>{
  res.send("logout endpoint");
});


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
