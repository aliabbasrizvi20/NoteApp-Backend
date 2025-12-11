  const express=require("express")
  const cors=require("cors")
  const dotenv = require("dotenv");
  const mongoose=require("mongoose")
 const authRoutes = require("./Routes/authRoutes")
 const noteRoutes = require("./Routes/noteRoutes")

  
 dotenv.config();
  const app=express()
  app.use(express.json())
   mongoose.connect(process.env.MONGO_URI)
 .then(()=>
  console.log("Connected to DataBase : Mongoose")
 )
 .catch(err=>
  console.error("Error, connecting to Database: Mongoose",err))  
  app.use(cors({ origin: 'https://notesthat.netlify.app' }));
  app.use('/auth',authRoutes)
  app.use('/note',noteRoutes)
const PORT = process.env.PORT || 5000;
  app.listen(PORT,()=>{
    console.log(`Server is live on PORT : http://localhost:${PORT}`);
  })




























// const express=require('express')
  // const mongoose=require('mongoose')
  // const cors=require('cors')
  // const dotenv=require('dotenv');
  // dotenv.config();
  // const app=express();
  // app.use(cors());
  // app.use(express.json());
    
  //   const User =require('../backend/models/user');



  //   mongoose.connect(process.env.MONGO_URI)
  //   .then(()=>console.log("Mongoose Connected"))
  //   .catch(err=>console.error("Error connecting to Databse(Mongoose)"));

  //   app.post('/signup',async (req,res)=>{
  //     const {name,email,password}=req.body
  //     const userExists= await User.findOne({email})
  //     if(userExists){ return res.json({success: false, message: "User already exists, please login"})
       
  //     }
 
  //     await User.create({ name, email, password })
  //       res.json({ success: true, message: "User Created!! "})
       

  //   })

  //       app.post('/login', async(req,res)=>{
  //         const {email, password}=req.body
  //         const userExists=await User.findOne({email})
  //         if(!userExists) return res.json({success:false, message: "No Account Exist, Create an account first to continue"})
  //         if(userExists.password!==password) return res.json({success:false, message: "Password doesn't match"})
  //          return res.json({success:true, message : "LoggedIn Successfully!! "})
  //       })


  //       app.listen(5000,()=>{
  //         console.log("Server has started and is live on http://localhost:5000");
  //       })















// const User = require("../backend/models/user");
// const express=require("express");
//   const mongoose=require("mongoose");
//   const cors =require("cors");
//   const dotenv =require("dotenv");
//     dotenv.config();
//   const app=express();
//   app.use(cors())
//   app.use(express.json());


//   mongoose.connect(process.env.MONGO_URI)
//   .then(()=>console.log("Mongoose Connected"))
//   .catch(err=>console.error("Error connecting to Mongoose",err))

//  app.post("/signup",async(req,res)=>{
//  const { name, email, password }=req.body;
//   const existUser= await User.findOne({email})
//   if(existUser) return res.json({message: "User already exists!"})
//     await User.create({name, email, password})
//   res.json({message: " User Created! "});
//  })

//  app.post("/login",async(req,res)=>{
//     const{ email, password }=req.body;
//         const user= await User.findOne({email})
//         if(!user)return res.json({message: " User doesn't exist, please signup first"})
//           if(user.password!==password)return res.json({message:"Password doesn't match"})
//             res.json({message:"Logged In successfully!!"})
//           res.send('/')
          

//  })

// app.listen(5000,()=>{
//   console.log("Server Started!");
// })


// // import express from "express";
// // import mongoose from "mongoose";
// // import cors from "cors";
// // import dotenv from "dotenv";

// // dotenv.config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // ✅ Connect to MongoDB Atlas
// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => console.log("✅ MongoDB Connected"))
// //   .catch(err => console.log("❌ DB Error:", err));

// // // ✅ Simple user schema
// // const userSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   password: String
// // });
// // const User = mongoose.model("User", userSchema);

// // // ✅ Signup
// // app.post("/signup", async (req, res) => {
// //   const { name, email, password } = req.body;
// //   const userExists = await User.findOne({ email });
// //   if (userExists) return res.json({ msg: "User already exists" });

// //   await User.create({ name, email, password });
// //   res.json({ msg: "Signup successful" });
// // });

// // // ✅ Login
// // app.post("/login", async (req, res) => {
// //   const { email, password } = req.body;
// //   const user = await User.findOne({ email });

// //   if (!user) return res.json({ msg: "No user found, please sign up" });
// //   if (user.password !== password) return res.json({ msg: "Wrong password" });

// //   res.json({ msg: "Login successful" });
// // });

// // app.listen(5000, () => console.log("🚀 Server running on port 5000"));



// // // const express=require("express");
// // // const mongoose=require("mongoose");
// // // const cors=require("cors");
// // // const user=require('../backend/models/user')

// // // const app=express();
// // // app.use(cors());
// // // app.use(express.json());

// // // // Connecting to MongoDB

// // // mongoose.connect(process.env.MONGO_URI)
// // // .then(()=>console.log("Mongoose connected"))
// // // .catch(err=>console.error("Error connecting to DB",err));

// // // app.post('/register', async(req,res)=>{
// // //    const {email,password}=req.body;
// // //    try{
// // //     const exist=await user.findOne({email});
// // //     if(exist){
// // //        return res.status(400).json({message:"User Exists"});

// // //        const newUser=new User({email,password});
// // //        await newUser.save();
// // //        res.json({"user created successfully"})
// // //     }
// // //     catch(err){
// // //         res.json({message:"error registring user"})
// // //     }
   
// // // })

// // //     app.post('/login',async(req,res)=>{
// // //         const {email, password}=req.body;

// // //         try{
// // //             const user= await User.findOne({email})
// // //             if(!user || User.password!==password){
// // //                 return res.status(400).json({message:"User not found!"})
// // //             }
// // //             res.json({message:"Hello World"});
// // //         }
// // //         catch(err){
// // //             res.status(500).json({message:"Error logging in"});
// // //         }
// // //     })

    


// // // app.listen(3000,()=>{
// // //     console.log("Node Started!!");
// // // })