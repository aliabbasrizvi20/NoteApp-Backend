const User=require("../models/user");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

// Register
 const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const existUser=await User.findOne({email});
        if(existUser){ return res.status(400).json({success:false,message:"User already exist"})}
            const hashedPassword=await bcrypt.hash(password,10)
        
        const newUser=await User.create({
            name,
            email,
            password:hashedPassword,
        })
        res.status(201).json({success:true, message: "new user is created"})
    }
    catch(error){
        res.status(500).json({error})
    }
};

    // LogIn

     const login=async (req,res)=>{
        try{
            const {email, password}=req.body
            const exist=await User.findOne({email})
            if(!exist){
               return res.status(400).json({success: false, message: "No user exist"})
            }
            const match=await bcrypt.compare(password, exist.password)
            if(!match) return res.status(400).json({success:false, message:"Password doesn't match"})

                const token=jwt.sign(
                    {id:exist._id},
                    process.env.JWT_SECRET,
                    {expiresIn:"1d"}
                );
             return res.json({success: true, message:"LogIn Successful", token, user:{id:exist._id, name: exist.name, email:exist.email}})
        }
        catch(error){
           res.status(500).json({ success: false, message: error.message })
        }
    }
    module.exports={register,login}