import express from "express";
import mongoose from "mongoose";
import User from "./model/usermodel.js";

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb+srv://praveen9695003121_db_user:K5W3m0WC4gsLIOJD@cluster0.8jhmep2.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(3000, () => console.log("Server running on port 3000"));

app.post("/signup", async(req, res)=>{
    const userdata = req.body;
    const createuser = await User.create(userdata);
    res.status(200).json({
        createuser
    })
    console.log(createuser);
})
